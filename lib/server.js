/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_details__ = __webpack_require__(19);
/* harmony default export */ __webpack_exports__["a"] = ([{exact:true,path:"/products",component:__WEBPACK_IMPORTED_MODULE_0__product_list__["a" /* default */],dataFetcher:__webpack_require__(6).default},{exact:true,path:"/products/:id",component:__WEBPACK_IMPORTED_MODULE_1__product_details__["a" /* default */],dataFetcher:__webpack_require__(8).default}]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = priceFormat;
function priceFormat(price){var val=price*100.0/100.0;return"$"+val;}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(("https://www.westelm.com"||'')+'/services/catalog/v4/category/shop/new/all-new/index.json').then(function(response){return response.json();});//TODO return only needed data to avoid storing too much data on the DOM
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony default export */ __webpack_exports__["default"] = (function(_ref){var params=_ref.params,props=_ref.props;if(props&&props.product){return Promise.resolve(props.product);}else{return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(("https://www.westelm.com"||'')+'/services/catalog/v4/category/shop/new/all-new/index.json').then(function(response){return response.json();}).then(function(data){return data.groups.find(function(product){return product.id===params.id;});});//TODO return only needed data to avoid storing too much data on the DOM
}});;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_http_proxy__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App__ = __webpack_require__(25);
var app=__WEBPACK_IMPORTED_MODULE_0_express___default()();var indexTemplate=__WEBPACK_IMPORTED_MODULE_3_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(),'build','index.html'),'utf-8').toString().trim();app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(),'build')));app.get('/services/*',__WEBPACK_IMPORTED_MODULE_1_express_http_proxy___default()('https://www.westelm.com/services'));//	res.sendFile(path.join(process.cwd(), 'build', 'index.html'))
app.get('/*',function(req,res){var _routes$reduce=__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */].reduce(function(acc,route){var match=Object(__WEBPACK_IMPORTED_MODULE_6_react_router__["matchPath"])(req.url,route);if(match){acc.match=match;acc.route=route;}return acc;},{}),route=_routes$reduce.route,match=_routes$reduce.match;if(route&&match){var dataPromise=void 0;if(route.dataFetcher){dataPromise=route.dataFetcher(match);}else{dataPromise=Promise.resolve();}dataPromise.then(function(data){var context={data:data};var html=__WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["StaticRouter"],{location:req.url,context:context},__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__App__["a" /* default */],null)));if(context.url){res.writeHead(302,{Location:context.url});res.end();}else{var htmlOutput='<script>window.__REACT_APP_VIEW_DATA__=\''+(data?JSON.stringify(data):'{}')+'\'</script>'+'<div id="root">'+html+'</div>';res.write(indexTemplate.replace('<div id="root"></div>',htmlOutput));res.end();}}).catch(function(e){console.log('Error loading data:',e);res.sendStatus(400).end();});}else{res.sendStatus(404).end();}});var server=app.listen(9000,function(){return console.log("Listening at port %s",server.address().port);});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListComponent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataFetcher__ = __webpack_require__(6);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ListWrapper=function(_React$Component){_inherits(ListWrapper,_React$Component);function ListWrapper(props){_classCallCheck(this,ListWrapper);var _this=_possibleConstructorReturn(this,(ListWrapper.__proto__||Object.getPrototypeOf(ListWrapper)).call(this,props));_this.state={staticContext:_this.props.staticContext,title:'',products:[]};return _this;}_createClass(ListWrapper,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;//called only on browser for client-side rendering
if(!this.state.staticContext){if(typeof window!=='undefined'&&window.__REACT_APP_VIEW_DATA__){this.setState({staticContext:{data:JSON.parse(window.__REACT_APP_VIEW_DATA__)}});delete window.__REACT_APP_VIEW_DATA__;}else{Object(__WEBPACK_IMPORTED_MODULE_3__dataFetcher__["default"])().then(function(data){return _this2.setState({staticContext:{data:data}});});}}}},{key:'render',value:function render(){if(this.state.staticContext){var data=this.state.staticContext.data;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ListComponent__["a" /* default */],{title:data.name,products:data.groups});}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);}}]);return ListWrapper;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);ListWrapper.propTypes={staticContext:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};/* harmony default export */ __webpack_exports__["a"] = (ListWrapper);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_entities__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html_entities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_priceFormat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ListComponent_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ListComponent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ListComponent_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var entities=new __WEBPACK_IMPORTED_MODULE_3_html_entities__["AllHtmlEntities"]();var ProductsList=function(_React$Component){_inherits(ProductsList,_React$Component);function ProductsList(){_classCallCheck(this,ProductsList);return _possibleConstructorReturn(this,(ProductsList.__proto__||Object.getPrototypeOf(ProductsList)).apply(this,arguments));}_createClass(ProductsList,[{key:'render',value:function render(){return this.props.products?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'page-title'},this.props.title),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'pure-g products-list'},this.props.products.map(function(product){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:product.id,className:'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4 product'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],{to:'/products/'+product.id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{alt:product.name,src:product.thumbnail.href}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'product-name'},entities.decode(product.name)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,product.priceRange.regular?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'regular product-price'},Object(__WEBPACK_IMPORTED_MODULE_4__utils_priceFormat__["a" /* default */])(product.priceRange.regular.low),' - ',Object(__WEBPACK_IMPORTED_MODULE_4__utils_priceFormat__["a" /* default */])(product.priceRange.regular.high)):'',product.priceRange.selling?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'selling product-price'},Object(__WEBPACK_IMPORTED_MODULE_4__utils_priceFormat__["a" /* default */])(product.priceRange.selling.low),' - ',Object(__WEBPACK_IMPORTED_MODULE_4__utils_priceFormat__["a" /* default */])(product.priceRange.selling.high)):''))));}))):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);}}]);return ProductsList;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);ProductsList.propTypes={title:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,products:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,errors:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array};ProductsList.defaultProps={errors:[]};/* harmony default export */ __webpack_exports__["a"] = (ProductsList);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DetailsComponent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataFetcher__ = __webpack_require__(8);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ProductDetailsWrapper=function(_React$Component){_inherits(ProductDetailsWrapper,_React$Component);function ProductDetailsWrapper(props){_classCallCheck(this,ProductDetailsWrapper);var _this=_possibleConstructorReturn(this,(ProductDetailsWrapper.__proto__||Object.getPrototypeOf(ProductDetailsWrapper)).call(this,props));_this.state={staticContext:_this.props.staticContext,match:_this.props.match,productId:_this.props.match.params.id};return _this;}_createClass(ProductDetailsWrapper,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;//called only on browser for client-side rendering
if(!this.state.staticContext){if(typeof window!=='undefined'&&window.__REACT_APP_VIEW_DATA__){this.setState({staticContext:{data:JSON.parse(window.__REACT_APP_VIEW_DATA__)}});delete window.__REACT_APP_VIEW_DATA__;}else{Object(__WEBPACK_IMPORTED_MODULE_3__dataFetcher__["default"])({params:this.state.match.params}).then(function(data){return _this2.setState({staticContext:{data:data}});});}}}},{key:'render',value:function render(){if(this.state.staticContext){var data=this.state.staticContext.data;return data?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__DetailsComponent__["a" /* default */],{product:data}):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);}}]);return ProductDetailsWrapper;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);ProductDetailsWrapper.propTypes={staticContext:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["a"] = (ProductDetailsWrapper);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_entities__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html_entities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuka_carousel__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuka_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nuka_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_priceFormat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Overlay__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DetailsComponent_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DetailsComponent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DetailsComponent_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var entities=new __WEBPACK_IMPORTED_MODULE_3_html_entities__["AllHtmlEntities"]();var ProductDetails=function(_React$Component){_inherits(ProductDetails,_React$Component);function ProductDetails(props){_classCallCheck(this,ProductDetails);var _this=_possibleConstructorReturn(this,(ProductDetails.__proto__||Object.getPrototypeOf(ProductDetails)).call(this,props));_this.showAltImages=_this.showAltImages.bind(_this);return _this;}_createClass(ProductDetails,[{key:'showAltImages',value:function showAltImages(){this.overlay.show();}},{key:'render',value:function render(){var _this2=this;var product=this.props.product;return product?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],{to:'/products',className:'all-products-link'},'View All Products'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'pure-g product-detail-container'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'pure-u-1 pure-u-md-1-2 product-image'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{alt:product.name,src:product.hero.href,onClick:this.showAltImages})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'pure-u-1 pure-u-md-1-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'product-detail'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',null,entities.decode(product.name)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,product.priceRange.regular?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'regular product-price'},'Regular Price: ',Object(__WEBPACK_IMPORTED_MODULE_5__utils_priceFormat__["a" /* default */])(product.priceRange.regular.low),' - ',Object(__WEBPACK_IMPORTED_MODULE_5__utils_priceFormat__["a" /* default */])(product.priceRange.regular.high)):'',product.priceRange.selling?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'selling product-price'},'Selling Price: ',Object(__WEBPACK_IMPORTED_MODULE_5__utils_priceFormat__["a" /* default */])(product.priceRange.selling.low),' - ',Object(__WEBPACK_IMPORTED_MODULE_5__utils_priceFormat__["a" /* default */])(product.priceRange.selling.high)):'')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__common_Overlay__["a" /* default */],{ref:function ref(el){return _this2.overlay=el;}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_nuka_carousel___default.a,{className:'images-overlay'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{key:'img0',alt:product.name,src:product.hero.href}),product.images.map(function(image,idx){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{alt:product.name,key:'img'+(idx+1),src:image.href});})))):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);}}]);return ProductDetails;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);ProductDetails.propTypes={product:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,errors:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array};ProductDetails.defaultProps={errors:[]};/* harmony default export */ __webpack_exports__["a"] = (ProductDetails);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Overlay_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Overlay_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Overlay_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Overlay=function(_React$Component){_inherits(Overlay,_React$Component);function Overlay(props){_classCallCheck(this,Overlay);var _this=_possibleConstructorReturn(this,(Overlay.__proto__||Object.getPrototypeOf(Overlay)).call(this,props));_this.hide=_this.hide.bind(_this);_this.state={showing:false};return _this;}_createClass(Overlay,[{key:'hide',value:function hide(e){e.preventDefault();this.setState({showing:false});}},{key:'show',value:function show(){this.setState({showing:true});}},{key:'render',value:function render(){var _this2=this;var showing=this.state.showing;var content=showing?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'overlay-container'},this.props.children),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'overlay-background',onClick:function onClick(e){return _this2.hide(e);}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'overlay-close',onClick:function onClick(e){return _this2.hide(e);}})):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null);return content;}}]);return Overlay;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Overlay.propTypes={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element};Overlay.defaultProps={children:null};/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var App=function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'container'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('header',{className:'app-header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',{className:'app-title'},'West',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,'Elm'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].map(function(_ref){var path=_ref.path,exact=_ref.exact,Comp=_ref.component;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{key:path,path:path,exact:exact,render:function render(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Comp,props);}});})));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map