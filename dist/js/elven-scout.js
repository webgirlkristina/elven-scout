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
      this.setFrame(0);
      this.running = true;
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
        this.lastTime += this.speed;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

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

    _this.orcTiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'orc',
      imageWidth: 832,
      imageHeight: 1344
    });
    _this.orc = _this.orcTiles.getAnimation([1, 2, 3, 4, 5, 6, 7], 300);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGUtbWFwLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImxhc3RUaW1lIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsInRpbWUiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJDb250cm9sU3RhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJmaXJlIiwia2V5TWFwIiwiTWFwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ1cGRhdGUiLCJwcmVzc2VkIiwiaGFzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0IiwiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsImxvYWRJbWFnZXMiLCJvcmMiLCJwbGF5ZXIiLCJ0aXRsZSIsInRpbGVzIiwiY29udHJvbCIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJnYW1lTGV2ZWwiLCJHYW1lTGV2ZWwiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJTVEFSVF9HQU1FIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsInJ1biIsImdhbWUiLCJjb25zdHJ1Y3RvciIsIlNwcml0ZVNoZWV0IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwidHJlZSIsImdldFNwcml0ZSIsInNldFhZIiwib3JjVGlsZXMiLCJnZXRBbmltYXRpb24iLCJtYXBEYXRhIiwicmVxdWlyZSIsIm1hcCIsImNyZWF0ZU1hcCIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwibGF5ZXJzIiwiZm9yRWFjaCIsImxheWVyIiwidHlwZSIsImRhdGEiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJvYmoiLCJ4MSIsIngiLCJ4MiIsInkxIiwieSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwiTWF0aCIsInRydW5jIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFTyxJQUFNQSxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLDJCQUFnRztBQUFBOztBQUFBLFFBQW5GQyxTQUFtRixRQUFuRkEsU0FBbUY7QUFBQSxRQUF4RUMsTUFBd0UsUUFBeEVBLE1BQXdFO0FBQUEsUUFBaEVDLEtBQWdF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1FLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksbUJBQVlhLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixpRkFBTUEsS0FBTjtBQUNBLFVBQUsvQixRQUFMLEdBQWdCK0IsS0FBSyxDQUFDL0IsUUFBTixJQUFrQixFQUFsQztBQUZlO0FBR2xCOztBQUpMO0FBQUEsRUFBNkJ4Ryw4Q0FBN0IsRSIsImZpbGUiOiJqcy9lbHZlbi1zY291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxuICAgICAgICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxuICAgICAgICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5leHRGcmFtZSgpIHtcbiAgICAgICAgaWYoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xuICAgICAgICAgICAgaWYodGhpcy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZighdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZigodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbMzcsJ2xlZnQnXSxbMzksJ3JpZ2h0J10sWzM4LCd1cCddLFs0MCwnZG93biddLFszMiwnZmlyZSddXG4gICAgICAgIF0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XG4gICAgICAgIGlmKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XG5cdFx0XHRvcmM6ICdpbWcvb3JjLnBuZycsXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXG5cdFx0XHR0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxuXHRcdFx0dGlsZXM6ICdpbWcvdGlsZXMucG5nJyAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxuICAgICAgICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXG4gICAgICAgICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFNjZW5lLkxPQURFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyYW1lKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSx0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xuICAgIGVsdmVuU2NvdXQucnVuKCk7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxuICAgIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cbiAgICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cbiAgICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gICAgfVxuXG4gICAgZmluaXNoKHN0YXR1cykge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICByZW5kZXIgKHRpbWUpIHtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XG4gICAgICAgIHRoaXMudHJlZS5zZXRYWSgxMCwgMTApO1xuICAgICAgICB0aGlzLm9yY1RpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ29yYycsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogMTM0NFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcmMgPSB0aGlzLm9yY1RpbGVzLmdldEFuaW1hdGlvbihbMSwyLDMsNCw1LDYsN10sIDMwMCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgICAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKFwibGV2ZWwxXCIsIG1hcERhdGEsIHRoaXMudGlsZXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMub3JjLnVwZGF0ZSh0aW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYyk7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg1MCw3MCxcItCX0LDQs9GA0YPQt9C60LAuLi5cIik7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsIFwi0J3QsNC20LzQuNGC0LUg0L/RgNC+0LHQtdC7XCIpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZXMoaW1hZ2VGaWxlcykge1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG5cbiAgICBjcmVhdGVNYXAobmFtZSwgbWFwRGF0YSwgdGlsZXNldCkge1xuICAgICAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcbiAgICAgICAgbWFwSW1hZ2UuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQgKiBtYXBEYXRhLnRpbGVoZWlnaHQ7XG4gICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xuICAgICAgICBsZXQgcm93LCBjb2w7XG4gICAgICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIGxheWVyLmRhdGEuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICAgICAgICAgICAgICBpZihjb2wgPiAobWFwRGF0YS53aWR0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHt4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0fSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBtYXBJbWFnZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogbmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IDAsXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxuICAgICAgICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsbChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpbnQoeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMnB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcbiAgICB9XG5cbiAgICBkcmF3U3ByaXRlKHNwcml0ZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgc3ByaXRlLnNvdXJjZVgsIHNwcml0ZS5zb3VyY2VZLCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICBzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NH0pIHtcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodDtcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKGluZGV4ID0+ICh7c3g6IHRoaXMuZ2V0U291cmNlWChpbmRleCksIHN5OiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpfSkpLFxuICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgICBhdXRvcnVuOiBhdXRvcnVuLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNwcml0ZShpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZSh7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlWChpbmRleCkge1xuICAgICAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcbiAgICB9XG5cbiAgICBnZXRTb3VyY2VZKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9NjR9KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH1cblxuICAgIHNldFhZKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==