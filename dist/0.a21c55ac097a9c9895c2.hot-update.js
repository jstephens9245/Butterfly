webpackHotUpdate(0,{

/***/ 743:
/*!************************************!*\
  !*** ./client/components/Index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDndTouchBackend = __webpack_require__(/*! react-dnd-touch-backend */ 744);
	
	var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 367);
	
	var _SidebarContainer = __webpack_require__(/*! ../containers/SidebarContainer */ 745);
	
	var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 748);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      null,
	      props.children && _react2.default.cloneElement(props.children, props)
	    )
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend2.default)({ enableMouseEvents: true }))(Index);

/***/ }

})
//# sourceMappingURL=0.a21c55ac097a9c9895c2.hot-update.js.map