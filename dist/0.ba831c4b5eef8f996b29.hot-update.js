webpackHotUpdate(0,{

/***/ 225:
/*!***************************!*\
  !*** ./client/Routes.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Routes;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store */ 226);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 237);
	
	var _HomepageContainer = __webpack_require__(/*! ./containers/HomepageContainer */ 292);
	
	var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);
	
	var _user = __webpack_require__(/*! ./actions/user */ 294);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 320);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	// function indexEnter() {
	//   store.dispatch(checkLoginStatus());
	// }
	
	//action-creators
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default })
	    )
	  );
	}
	
	//components
	
	
	//containers

/***/ }

})
//# sourceMappingURL=0.ba831c4b5eef8f996b29.hot-update.js.map