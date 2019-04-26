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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
};

/***/ }),

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, layers, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":1,"layers":[{"data":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],"height":1,"name":"shoot_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],"height":1,"name":"shoot_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],"height":1,"name":"shoot_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],"height":1,"name":"shoot_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"death","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/playertiles.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: height, layers, nextobjectid, orientation, properties, propertytypes, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":20,"layers":[{"data":[1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,1,1,1,1,1,1,1,18,1,1,1,1,1,22,22,22,1,1,1,26,27,27,27,27,17,27,27,28,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[7,21,0,23,7,0,7,3,11,12,12,12,12,13,0,2,7,7,7,7,7,21,0,23,0,0,7,3,31,32,32,32,32,33,4,0,2,2,2,7,7,21,0,23,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,21,0,23,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,21,0,23,7,7,2,2,2,2,2,21,0,23,2,4,2,2,2,7,7,21,0,23,0,0,0,0,0,0,0,21,0,23,0,6,6,6,4,7,7,21,5,23,6,6,6,6,6,6,5,21,0,23,0,6,5,6,4,7,7,21,0,24,12,12,12,12,12,12,12,25,0,23,0,6,6,6,4,7,7,31,32,32,32,32,32,32,32,32,32,32,32,33,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,11,12,12,13,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,21,14,15,23,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,21,24,25,23,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,31,32,32,33,7,7,7,7,0,0,0,2,0,0,7,0,11,12,12,13,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,31,32,32,33,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,11,12,12,12,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,31,32,32,32,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],"height":20,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","name":"hitboxes","objects":[{"height":1279,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":1,"y":1},{"height":59,"id":4,"name":"","rotation":0,"type":"","visible":true,"width":1276,"x":1,"y":1218},{"height":65,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":127,"x":129,"y":1153},{"height":57,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":67,"y":1090},{"height":55,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":52,"x":71,"y":1027},{"height":184,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":257,"y":899},{"height":54,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":323,"y":900},{"height":118,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":122,"x":515,"y":899},{"height":63,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":577,"y":831},{"height":62,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":63,"x":705,"y":961},{"height":60,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":834,"y":1026},{"height":58,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":121,"x":515,"y":1090},{"height":59,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":247,"x":579,"y":1154},{"height":120,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":55,"x":387,"y":1027},{"height":120,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":123,"x":66,"y":834},{"height":60,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":193,"y":771},{"height":63,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":321,"y":703},{"height":62,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":514,"y":706},{"height":58,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":707,"y":705},{"height":61,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":835,"y":769},{"height":58,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":960,"y":835},{"height":54,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":50,"x":1031,"y":965},{"height":55,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":1152,"y":899},{"height":63,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":1218,"y":1151},{"height":1019,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":1219,"y":4},{"height":183,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":183,"x":964,"y":324},{"height":64,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":193,"x":1024,"y":-1},{"height":60,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":1089,"y":127},{"height":130,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":11,"x":1016,"y":63},{"height":64,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":381,"x":385,"y":192},{"height":62,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":186,"x":833,"y":190},{"height":188,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":384,"y":1},{"height":61,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120,"x":259,"y":257},{"height":61,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":255,"y":129},{"height":60,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":259,"y":2},{"height":56,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":262,"y":387},{"height":61,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":125,"x":63,"y":577},{"height":65,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":446,"x":257,"y":578}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextobjectid":42,"orientation":"orthogonal","properties":{"name":"level1"},"propertytypes":{"name":"string"},"renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/tileset.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-sheet */ "./src/character-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10);

    _this.orcTiles = new _character_sheet__WEBPACK_IMPORTED_MODULE_2__["CharacterSheet"]({
      imageName: "orc"
    });
    _this.orc = _this.orcTiles.getAnimation("stab_down");

    _this.orc.setXY(100, 10);

    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill("#000000");
      this.game.screen.print(50, 70, "Загрузка...");

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(250, 500, "Нажмите пробел");

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-map */ "./src/tile-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row, col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == "tilelayer") {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == "objectgroup") {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = "#FFFFFF";
      this.context.font = "22px Georgia";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/tile-map.js":
/*!*************************!*\
  !*** ./src/tile-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGlsZS1tYXAuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwibGFzdFRpbWUiLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwidGltZSIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkNoYXJhY3RlclNoZWV0IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJmb3JFYWNoIiwibGF5ZXIiLCJuYW1lIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsInJ1biIsImdhbWUiLCJjb25zdHJ1Y3RvciIsInRyZWUiLCJnZXRTcHJpdGUiLCJzZXRYWSIsIm9yY1RpbGVzIiwiZ2V0QW5pbWF0aW9uIiwibWFwRGF0YSIsIm1hcCIsImNyZWF0ZU1hcCIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwidHlwZSIsImdldFNvdXJjZVgiLCJnZXRTb3VyY2VZIiwib2JqZWN0cyIsIm9iaiIsIngxIiwieCIsIngyIiwieTEiLCJ5IiwieTIiLCJUaWxlTWFwIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHQiLCJmb250IiwiZmlsbFRleHQiLCJzcHJpdGUiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImluZGV4ZXMiLCJNYXRoIiwidHJ1bmMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVPLElBQU1BLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FB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QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sSUFBTUUsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxtQkFBWWEsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGlGQUFNQSxLQUFOO0FBQ0EsVUFBSzNCLFFBQUwsR0FBZ0IyQixLQUFLLENBQUMzQixRQUFOLElBQWtCLEVBQWxDO0FBRmU7QUFHbEI7O0FBSkw7QUFBQSxFQUE2QmpILDhDQUE3QixFIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGZyYW1lcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NH0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiBmcmFtZXNbMF0uc3gsXG4gICAgICAgICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gYXV0b3J1bjtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXRGcmFtZShpbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xuICAgICAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpe1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0RnJhbWUoKSB7XG4gICAgICAgIGlmKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL3Nwcml0ZS1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZX0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogMTM0NFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xuICAgIH1cblxuICAgIGdldFNlcXVlbmNlcygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0ge307XG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgc2VxdWVuY2VzW2xheWVyLm5hbWVdID0gbGF5ZXIuZGF0YS5maWx0ZXIoaSA9PiBpID4gMCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VxdWVuY2VzO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEFuaW1hdGlvbih0aGlzLnNlcXVlbmNlc1tuYW1lXSwgc3BlZWQsIHJlcGVhdCwgYXV0b3J1bik7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFszNywnbGVmdCddLFszOSwncmlnaHQnXSxbMzgsJ3VwJ10sWzQwLCdkb3duJ10sWzMyLCdmaXJlJ11cbiAgICAgICAgXSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpIHtcbiAgICAgICAgaWYodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzW3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKV0gPSBwcmVzc2VkO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gJy4vc2NlbmVzL2dhbWUtbGV2ZWwnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSdcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHt3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCxoZWlnaHQpO1xuICAgICAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcblx0XHRcdG9yYzogJ2ltZy9vcmMucG5nJyxcblx0XHRcdHBsYXllcjogJ2ltZy9wbGF5ZXIucG5nJyxcblx0XHRcdHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXG5cdFx0XHR0aWxlczogJ2ltZy90aWxlcy5wbmcnICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XG4gICAgICAgIHRoaXMuc2NlbmVzID0ge1xuICAgICAgICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcbiAgICAgICAgICAgIGdhbWVMZXZlbDogbmV3IEdhbWVMZXZlbCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xuICAgICAgICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJhbWUodGltZSkge1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVzID0gaW1hZ2VGaWxlcztcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWx2ZW5TY291dCA9IG5ldyBHYW1lKCk7XG4gICAgZWx2ZW5TY291dC5ydW4oKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBXT1JLSU5HKCkgeyByZXR1cm4gJ1dPUktJTkcnOyB9XG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9PVkVSKCkgeyByZXR1cm4gJ0dBTUVfT1ZFUic7IH1cbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBmaW5pc2goc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIHJlbmRlciAodGltZSkge1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gJy4uL2NoYXJhY3Rlci1zaGVldCc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICAgICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XG4gICAgICAgICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA2NDAsXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogNjQwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyZWUgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSg3KTtcbiAgICAgICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XG4gICAgICAgIHRoaXMub3JjVGlsZXMgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogXCJvcmNcIn0pO1xuICAgICAgICB0aGlzLm9yYyA9IHRoaXMub3JjVGlsZXMuZ2V0QW5pbWF0aW9uKFwic3RhYl9kb3duXCIpO1xuICAgICAgICB0aGlzLm9yYy5zZXRYWSgxMDAsMTApO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcChcImxldmVsMVwiLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xuICAgICAgICAvL3RoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDAwMDBcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDI1MCwgNTAwLCBcItCd0LDQttC80LjRgtC1INC/0YDQvtCx0LXQu1wiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZS1tYXAnO1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OyAgICAgICAgXG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcbiAgICAgICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xuICAgICAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJvdywgY29sO1xuICAgICAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICBsYXllci5kYXRhLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2wrKztcbiAgICAgICAgICAgICAgICAgICAgaWYoY29sID4gKG1hcERhdGEud2lkdGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsYXllci50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuICAgICAgICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAob2JqID0+ICh7eDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZU1hcCh7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiAwLFxuICAgICAgICAgICAgc291cmNlWTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgaGl0Ym94ZXM6IGhpdGJveGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbGwoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHByaW50KHgsIHksIHRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjJweCBHZW9yZ2lhXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG5cbiAgICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSwgeCwgeSk7XG4gICAgfVxuXG4gICAgZHJhd1Nwcml0ZShzcHJpdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tzcHJpdGUuaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgIHNwcml0ZS5zb3VyY2VYLCBzcHJpdGUuc291cmNlWSwgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0LFxuICAgICAgICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjR9KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKGluZGV4ZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcChpbmRleCA9PiAoe3N4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSxcbiAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgYXV0b3J1bjogYXV0b3J1bixcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTcHJpdGUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBzb3VyY2VYLCBzb3VyY2VZLCB3aWR0aCA9IDY0LCBoZWlnaHQgPTY0fSkge1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG5cbiAgICBzZXRYWSh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=