webpackHotUpdate(0,{

/***/ 232:
/*!*****************************************!*\
  !*** ./client/reducers/boardReducer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_BOARD:
	      newState.selectedBoard = action.board;
	      break;
	    case _constants.RECEIVE_BOARDS:
	      newState.allBoards = action.boards;
	      break;
	    case _constants.ADD_NEW_BOARD:
	      newState.allBoards = [].concat(_toConsumableArray(newState.allBoards), [action.board]);
	      break;
	    default:
	      return state;
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [] };

/***/ }

})
//# sourceMappingURL=0.0052bceef52d049cefd7.hot-update.js.map