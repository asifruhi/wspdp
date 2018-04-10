import express from 'express';
import proxy from 'express-http-proxy';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';

import routes from './routes';
import App from './App';

const app = express();
const indexTemplate = fs.readFileSync(path.join(process.cwd(), 'build', 'index.html'), 'utf-8').toString().trim();

app.get('/', (req, res) => {
	res.writeHead(302, {
	  Location: '/products'
	})
	res.end()
});

app.use(express.static(path.join(process.cwd(), 'build')));

app.get('/services/*', proxy('https://www.westelm.com/services'));

app.get('/products*', (req, res) => {
		const {route, match } = routes.reduce((acc, route) => {
			const match = matchPath(req.url, route);
			if (match) {
				acc.match = match;
				acc.route = route;
			}
			return acc;
		}, {});

		if (route && match) {
			let dataPromise;
			if (route.dataFetcher) {
				dataPromise = route.dataFetcher(match);
			} else {
				dataPromise = Promise.resolve()
			}

			dataPromise.then(data => {
				const context = {data};

		    const html = ReactDOMServer.renderToString(
		      <StaticRouter location={req.url} context={context}>
		        <App/>
		      </StaticRouter>
		    )

		    if (context.url) {
		      res.writeHead(302, {
		        Location: context.url
		      })
		      res.end()
		    } else {
		      const htmlOutput = '<script>window.__REACT_APP_VIEW_DATA__=\'' + (data ? JSON.stringify(data) : '{}') + '\'</script>'
		        + '<div id="root">' + html + '</div>';
		      res.write(indexTemplate.replace('<div id="root"></div>', htmlOutput));
		      res.end()
		    }
			}).catch(e => {
				console.log('Error loading data:', e);
				res.sendStatus(400).end();
			});
		} else {
			res.sendStatus(404).end();
		}
});

const server = app.listen(9000, () => console.log("Listening at port %s", server.address().port));