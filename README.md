# Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech-stack](#tech-stack)
- [Setup and Running](#setup-and-running)
- [Misc Notes](#misc-notes)

## Introduction

This project showcases a simple retail application built using [React](https://reactjs.org/) UI framework.
It loads a list of products and allows a user to view more details about a choosen product.

## Features

This project showcases the following features:

* Using React to build reusable components
* Using React's High Order Components approach for segregation of duties in the component technical design
* `Client-side routing` to create a `Single Page Application`
* `Server-side rendering` using React (and a bit of expressjs) - `SEO` support for all (2) pages
* `Server-side routing` using the same router as the client-side
* `Isomorphic` application
* `Responsive` application to support phone, tablet as well as desktop screen sizes
* `Seperate builds` - using `Hot Module Reloads` for local development and `highly optimized` Production build
* `a11y` support - adds basic screen reader support  
* `Jest Snapshot` testing to test against known snapshot

## Tech-stack

Below are the main tools and technologies used:

* [`create-react-app`](https://github.com/facebookincubator/create-react-app) to scaffold a React project with build tool set
* [`webpack`](https://webpack.js.org/) for the build
* [`react-router`](https://github.com/ReactTraining/react-router) for routing
* [`PureCSS Grids`](https://purecss.io/grids/) for a minimalist `responsive grid system`
* [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch) for fetch API
* [`expressjs`](http://expressjs.com/) for server application on node
* [`jest`](https://facebook.github.io/jest/) for unit testing  
* `ES6` features
* `media queries` for responsive products list
* `yarn` for package management


## Setup and Running

Below are the steps to setup and run the project:

* Download the project to your workspace using ```git clone <path>```
* Install dependencies using ```yarn install```
* For local development, use ```yarn start```
* For local unit testing, use ```yarn test```
* For production build, use ```yarn build```
* To run production version of the application (after production build), use ```yarn server```


## Misc Notes

* `create-react-app` scaffolding utility provides a very good starter React application with an 
amazing build tool support using webpack and a slue of plugins and loaders. However, the support is only 
for client side builds and lacks a lot of features (out-of-the-box) to create an enterprise grade application.
Additional work had to be done to support universal routing (that works on client as well as server side) 
and a lot of work to support server side rendering
* Some of the ideas for server-side rendering are borrowed from 
	[Server Rendering with React and React Router](https://tylermcginnis.com/react-router-server-rendering/)
* Even though there are ready-to-use React based frameworks that support server-side rendering out-of-the-box 
(e.g., [Next.js](https://github.com/zeit/next.js/)), 
I chose to stick to pure React as it is well-known and easy to understand vs specialized and probably less known 
frameworks
