webpackHotUpdate(0,{

/***/ 569:
/*!************************************!*\
  !*** ./client/utils/stringHash.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var sh = __webpack_require__(/*! shorthash */ 570);
	
	var _require = __webpack_require__(/*! ROOT/lib/utils/random */ 572),
	    randomString = _require.randomString;
	
	// 6 letter alpha numeric room name generator
	
	
	var genRoomName = function genRoomName() {
	  var range = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	  return randomString(6, 6, range);
	};
	
	// returns unique hash from any given str
	var genShortHash = function genShortHash(val) {
	  var string = void 0;
	  if (typeof val === 'string') string = val;else if (val.toString) string = val.toString();else throw new Error('What on earth did you just give me? I don\'t want ' + val);
	
	  return sh.unique(string);
	};
	
	module.exports = {
	  genRoomName: genRoomName, genShortHash: genShortHash
	};

/***/ }

})
//# sourceMappingURL=0.941467ec8d2b3981f1f6.hot-update.js.map