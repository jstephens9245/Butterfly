webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Comfortaa);", ""]);
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\nbody {\n  margin-top: 50px; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.hideThis {\n  display: none; }\n\n@media screen and (max-width: 799px) {\n  .snapTo {\n    display: none; }\n  .trashcan {\n    display: none; }\n  .ClipboardBlocking {\n    display: none; }\n  .boardTitle {\n    position: absolute;\n    font-size: 2em;\n    padding-bottom: 25px;\n    word-wrap: none;\n    margin: 1em;\n    text-shadow: center;\n    left: 20vw;\n    -webkit-transform: translateX(-20%);\n        -ms-transform: translateX(-20%);\n            transform: translateX(-20%); } }\n\n.ClipboardBlocking {\n  visibility: hidden; }\n\n.mobile {\n  margin-top: 20%; }\n\n.mobileListItem {\n  list-style-type: none;\n  border-bottom: 1px dashed black;\n  padding-left: 0;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: 5%;\n  margin-right: 5%;\n  float: right; }\n\n.mobileNoteContent {\n  word-wrap: break-word;\n  text-align: left;\n  padding-right: 0;\n  width: 80%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n.noteBlock {\n  display: inline-block;\n  width: 20%;\n  margin-top: 2%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n@media screen and (min-width: 800px) {\n  .snapTo {\n    display: inline-block; }\n  .boardTitle {\n    position: fixed;\n    left: 50vw;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    margin: 75px; } }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0;\n  background: #ffffff;\n  z-index: 99999; }\n\n.navbar a {\n  color: #363636; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n.navTitle {\n  display: none; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; }\n  .navTitle {\n    display: inline-block;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem; }\n\n.trashcan {\n  top: 85vh;\n  left: 89%;\n  z-index: 1;\n  position: fixed;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.3rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.7rem;\n  max-width: 3.7rem;\n  height: 3.7rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.6rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 4.6rem;\n    max-width: 4.6rem;\n    height: 4.6rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  height: 100%;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.boardBoxes {\n  width: 20em;\n  height: 200px;\n  position: relative; }\n\n.createButton {\n  width: 21em;\n  height: 262px;\n  position: relative;\n  display: inline-block;\n  margin: 0 5px 0 5px; }\n\n.deleteButton {\n  float: right;\n  text-align: right;\n  vertical-align: middle;\n  color: #292b2c;\n  background-color: #f2f2f2;\n  border-color: #ccc;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.snapTo {\n  top: 75px;\n  left: 88%;\n  width: auto;\n  margin-right: auto;\n  position: absolute;\n  z-index: 1000;\n  display: none; }\n\n.screen {\n  border: thin solid black;\n  background-color: #E8E8E8;\n  padding-bottom: 2%;\n  margin-bottom: 5%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n.boardTitle {\n  padding: 15px 15px;\n  font-size: 20px;\n  line-height: 20px;\n  color: black; }\n\n@media screen and (min-width: 768px) {\n  .boardTitle {\n    display: none; } }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 4em;\n  padding-bottom: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.login {\n  min-height: 23em; }\n\n.signup {\n  min-height: 32em; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.alert-warning {\n  text-align: center;\n  margin: 0 auto;\n  font-weight: bold;\n  width: 80%;\n  line-height: 1em;\n  display: block;\n  margin-top: 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .form-container {\n    width: 40vw;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 6em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top 0.5s ease-in;\n  transition: margin-top 0.5s ease-in; }\n\n@-webkit-keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px); }\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px); }\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px); }\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px); }\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.hvr-wobble-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px transparent; }\n\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\n  -webkit-animation-name: hvr-wobble-horizontal;\n  animation-name: hvr-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n.hvr-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  box-shadow: 0 0 1px transparent;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform; }\n\n.hvr-grow:hover,\n.hvr-grow:focus,\n.hvr-grow:active {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1); }\n\n@-webkit-keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n@keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%;\n  border-radius: 0.3em;\n  box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em rgba(54, 54, 54, 0.12); }\n\n.c-note--raised {\n  -webkit-animation-name: raising;\n          animation-name: raising;\n  -webkit-animation-duration: 300ms;\n          animation-duration: 300ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note---createwrapper {\n  font-size: 4vw; }\n  @media screen and (min-width: 992px) {\n    .c-note---createwrapper {\n      font-size: 19.84px; } }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: visible;\n  line-height: 1.5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.c-mention {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  padding: 0 0.2em;\n  word-wrap: break-word;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  overflow: visible; }\n\n.c-mention--suggesting {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.c-mention__suggestions {\n  position: absolute;\n  display: block;\n  padding: 0;\n  margin: 0;\n  top: 100%;\n  left: 0;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  border-top-left-radius: 0; }\n  .c-mention__suggestions li {\n    list-style: none; }\n  .c-mention__suggestions button {\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit; }\n    .c-mention__suggestions button:hover {\n      color: #edd00d; }\n\n.c-note__clear-btn {\n  background: #E6E6EF;\n  border: none;\n  font-size: 1.3em;\n  border-radius: 0.1em; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n.noteTitle {\n  padding: 15px 15px;\n  font-size: 1.7em;\n  line-height: 20px;\n  color: black; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n  @media screen and (min-width: 992px) {\n    .c-color-picker__wrapper--modal {\n      left: 33%;\n      width: 34%; } }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.c-color-picker__close {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  padding: 0.2em;\n  font-size: 3em;\n  background: none;\n  border: none; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.7em 0;\n  color: #fff;\n  border-bottom: 1px solid black;\n  font-size: 1.4rem; }\n\n.participant-number {\n  margin: 0 0.7em;\n  padding: 0.3em 0.3em;\n  background-color: #4099FF;\n  border-radius: 5px; }\n  .participant-number i {\n    margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  padding: 0.8em;\n  border-bottom: 1px solid #ABABAB; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    margin-top: 3em;\n    width: 20vw;\n    padding-top: 0.3em;\n    min-height: 100vh;\n    max-height: 100vh;\n    float: right;\n    border-left: solid 1px #3a3f41;\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    overflow: auto; }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -19.5%; } }\n\n.enlarge {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.board-page-container {\n  position: relative; }\n\n.note-details-close-btn {\n  position: absolute;\n  top: 0.1%;\n  right: 1%;\n  background-color: #192C46;\n  border-radius: 50%;\n  color: white;\n  border: 0;\n  font-size: 1em;\n  z-index: 999; }\n\n.note-details-container {\n  position: fixed;\n  top: 10%;\n  left: 2%;\n  width: 94vw;\n  height: 80vh;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 1.5em;\n  margin: 0.5em auto;\n  border-radius: 10px;\n  background: -webkit-linear-gradient(135deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background: linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  border: 0;\n  z-index: 9999;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.note-details-note {\n  padding: 1em 1.5em;\n  height: 20vh;\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 7px;\n  word-wrap: break-word; }\n\n.comment-form {\n  margin-top: 0.5em; }\n\n.comment-input-container {\n  width: 100%;\n  height: 3em;\n  margin: 0; }\n\n.comment-text-area {\n  margin: 0;\n  padding: 0.2em;\n  width: 80%;\n  height: 100%;\n  margin-right: 5%;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid #69bdf4; }\n  .comment-text-area:focus {\n    outline: none; }\n\n.comment-submit-button {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-weight: 700;\n  border-radius: 2px;\n  width: 15%;\n  border: none;\n  padding: 0;\n  background-color: #fff; }\n  .comment-submit-button span {\n    font-size: 1em; }\n\n.note-details-comments {\n  overflow: hidden; }\n  .note-details-comments .inner {\n    height: 45vh;\n    overflow: auto;\n    margin: 0.3em -3rem 0.3em 0.3em;\n    padding-right: 3.3rem; }\n\n.note-details-comment {\n  color: white;\n  padding: 0.7em 0.9em;\n  line-height: 1.5em;\n  font-size: 1em;\n  border-radius: 7px;\n  margin-top: 1em;\n  margin-bottom: 0;\n  width: 100%;\n  position: relative; }\n  .note-details-comment:after {\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-width: 10px;\n    margin-left: -10px; }\n\n.note-details-comment:nth-child(odd) {\n  background: #94C2ED; }\n  .note-details-comment:nth-child(odd):after {\n    border-bottom-color: #94C2ED;\n    left: 93%; }\n\n.note-details-comment:nth-child(even) {\n  background: #86BB71; }\n  .note-details-comment:nth-child(even):after {\n    border-bottom-color: #86BB71;\n    left: 7%; }\n\n.noteDetailSlideIn-appear {\n  margin-top: -800px; }\n\n.noteDetailSlideIn-appear.noteDetailSlideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top 0.5s cubic-bezier(0.31, 0.77, 0.21, 0.99);\n  transition: margin-top 0.5s cubic-bezier(0.31, 0.77, 0.21, 0.99); }\n\n@media screen and (min-device-width: 1024px) {\n  .note-details-container {\n    position: absolute;\n    width: 40vw;\n    height: 90vh;\n    left: 30vw; }\n  .note-details-comments .inner {\n    height: 55vh; } }\n\n.c-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  margin: 0.5em 0; }\n  .c-checkbox::after {\n    content: '';\n    display: inline-block;\n    width: 2.5em;\n    height: 2.5em;\n    margin: 0 0.25em;\n    border: 2px solid #363636;\n    border-radius: 0.5em;\n    vertical-align: middle; }\n\n.c-checkbox--checked::after {\n  background: rgba(54, 54, 54, 0.8); }\n\n.c-checkbox__input {\n  display: none; }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=0.26f9e5d51c3e9f067b8e.hot-update.js.map