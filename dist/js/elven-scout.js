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

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Body =
/*#__PURE__*/
function () {
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0);
    this.lastTime = 0;
    this.animations = {};
    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    this.stand("down");
  }

  _createClass(Body, [{
    key: "walk",
    value: function walk(direction) {
      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_" + direction];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_" + direction];
      this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      this.x += (time - this.lastTime) * (this.velocity.x / 1000);
      this.y += (time - this.lastTime) * (this.velocity.y / 1000);
      this.lastTime = time;
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 50000 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 50000 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 200 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.obj = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.obj = obj;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.watchObject) {
        if (this.obj.x > this.x + this.width - this.scrollEdge) {
          this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge);
        }

        if (this.obj.x < this.x + this.scrollEdge) {
          this.x = Math.max(0, this.obj.x - this.scrollEdge);
        }

        if (this.obj.y > this.y + this.height - this.scrollEdge) {
          this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
        }

        if (this.obj.y < this.y + this.scrollEdge) {
          this.y = Math.max(0, this.obj.y - this.scrollEdge);
        }
      }
    }
  }]);

  return Camera;
}();

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

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
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


var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  function Player(control) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: "player",
      speed: 50
    }));
    _this.control = control;
    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(time) {
      if (this.control.up) {
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
      } else {
        this.stand(this.velocity.direction);
      }

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    }
  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
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

    _this.player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
      this.player.update(time);
      this.mainCamera.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc);
      this.game.screen.drawSprite(this.player.view);

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
    this.camera = null;
    this.isCameraSet = false;
  }

  _createClass(Screen, [{
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
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
      var spriteX = sprite.x;
      var spriteY = sprite.y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) {
        return;
      }

      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      this.context.drawImage(this.images[sprite.imageName], sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
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

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case "up":
          this.y = -speed;
          break;

        case "down":
          this.y = speed;
          break;

        case "right":
          this.x = speed;
          break;

        case "left":
          this.x = -speed;
          break;
      }
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2wtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwibGFzdFRpbWUiLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwidGltZSIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkJvZHkiLCJ4IiwieSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJzcGxpdCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwic3RhbmQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ2aWV3IiwicnVuIiwic2V0WFkiLCJNYXRoIiwidHJ1bmMiLCJ1cGRhdGUiLCJDYW1lcmEiLCJsaW1pdFgiLCJsaW1pdFkiLCJzY3JvbGxFZGdlIiwid2F0Y2hPYmplY3QiLCJvYmoiLCJtaW4iLCJtYXgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsIlBsYXllciIsIndhbGsiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ0cmVlIiwiZ2V0U3ByaXRlIiwib3JjVGlsZXMiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsIndhdGNoIiwic2V0Q2FtZXJhIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJsb2FkZWRBdCIsImlzSW1hZ2VzTG9hZGVkIiwiZmluaXNoIiwicHJpbnQiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsImlzQ2FtZXJhU2V0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsInR5cGUiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FB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RUFBNkJqQyxLQUE3QjtBQUNIOztBQUhMO0FBQUE7QUFBQSxpQ0FLaUJpQyxTQUxqQixFQUs0QmpDLEtBTDVCLEVBS21DO0FBQzNCLFdBQUtpQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUtqQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLcUIsQ0FBTCxHQUFTLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsQ0FBVDs7QUFDQSxjQUFPVyxTQUFQO0FBQ0ksYUFBSyxJQUFMO0FBQ0ksZUFBS1gsQ0FBTCxHQUFTLENBQUN0QixLQUFWO0FBQ0o7O0FBRUEsYUFBSyxNQUFMO0FBQ0ksZUFBS3NCLENBQUwsR0FBU3RCLEtBQVQ7QUFDSjs7QUFFQSxhQUFLLE9BQUw7QUFDSSxlQUFLcUIsQ0FBTCxHQUFTckIsS0FBVDtBQUNKOztBQUVBLGFBQUssTUFBTDtBQUNJLGVBQUtxQixDQUFMLEdBQVMsQ0FBQ3JCLEtBQVY7QUFDSjtBQWZKO0FBa0JIO0FBNUJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9lbHZlbi1zY291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxuICAgICAgICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxuICAgICAgICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBpZighdGhpcy5ydW5uaW5nKXtcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV4dEZyYW1lKCkge1xuICAgICAgICBpZigodGhpcy5jdXJyZW50RnJhbWUgKyAxKSA9PSB0aGlzLnRvdGFsRnJhbWVzKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlcGVhdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJkb3duXCIsIDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogaW1hZ2VOYW1lfSk7XG4gICAgICAgIFwid2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhbmQoXCJkb3duXCIpO1xuICAgIH1cblxuICAgIHdhbGsoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcIndhbGtfXCIgKyBkaXJlY3Rpb25dO1xuICAgICAgICB0aGlzLnZpZXcucnVuKCk7XG4gICAgfVxuXG4gICAgc3RhbmQoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcIndhbGtfXCIgKyBkaXJlY3Rpb25dO1xuICAgICAgICB0aGlzLnZpZXcuc3RvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggKz0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAqICh0aGlzLnZlbG9jaXR5LnggLyAxMDAwKTtcbiAgICAgICAgdGhpcy55ICs9ICh0aW1lIC0gdGhpcy5sYXN0VGltZSkgKiAodGhpcy52ZWxvY2l0eS55IC8gMTAwMCk7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLE1hdGgudHJ1bmModGhpcy55KSk7XG4gICAgICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xuICAgIGNvbnN0cnVjdG9yKHt3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwLCBsaW1pdFggPSA1MDAwMCwgbGltaXRZID0gNTAwMDAsIHNjcm9sbEVkZ2UgPSAyMDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5saW1pdFggPSBsaW1pdFg7XG4gICAgICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JqID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcbiAgICB9XG5cbiAgICB3YXRjaChvYmopIHtcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMud2F0Y2hPYmplY3QpIHtcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLmxpbWl0WCwgdGhpcy5vYmoueCAtIHRoaXMud2lkdGggKyB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLm9iai54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54IC0gdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5vYmoueSA+ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1pbih0aGlzLmxpbWl0WSwgdGhpcy5vYmoueSAtIHRoaXMuaGVpZ2h0ICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueSAtIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi9zcHJpdGUtc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWV9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogODMyLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzID0gdGhpcy5nZXRTZXF1ZW5jZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTZXF1ZW5jZXMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKGkgPT4gaSA+IDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlcztcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24obmFtZSwgc3BlZWQgPSAxMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5nZXRBbmltYXRpb24odGhpcy5zZXF1ZW5jZXNbbmFtZV0sIHNwZWVkLCByZXBlYXQsIGF1dG9ydW4pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbMzcsJ2xlZnQnXSxbMzksJ3JpZ2h0J10sWzM4LCd1cCddLFs0MCwnZG93biddLFszMiwnZmlyZSddXG4gICAgICAgIF0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XG4gICAgICAgIGlmKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XG5cdFx0XHRvcmM6ICdpbWcvb3JjLnBuZycsXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXG5cdFx0XHR0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxuXHRcdFx0dGlsZXM6ICdpbWcvdGlsZXMucG5nJyAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxuICAgICAgICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXG4gICAgICAgICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFNjZW5lLkxPQURFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyYW1lKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSx0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xuICAgIGVsdmVuU2NvdXQucnVuKCk7XG59O1xuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcbiAgICAgICAgc3VwZXIoe2ltYWdlTmFtZTogXCJwbGF5ZXJcIiwgc3BlZWQ6IDUwfSk7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5jb250cm9sLnVwKSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJ1cFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5kb3duKSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJkb3duXCIpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcInJpZ2h0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cbiAgICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cblxuICAgIGZpbmlzaChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgcmVuZGVyICh0aW1lKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi4vY2hhcmFjdGVyLXNoZWV0JztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuLi9jYW1lcmEnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XG4gICAgICAgIHRoaXMudHJlZS5zZXRYWSgxMCwgMTApO1xuICAgICAgICB0aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcbiAgICAgICAgdGhpcy5vcmMgPSB0aGlzLm9yY1RpbGVzLmdldEFuaW1hdGlvbihcInN0YWJfZG93blwiKTtcbiAgICAgICAgdGhpcy5vcmMuc2V0WFkoMTAwLDEwKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wpO1xuICAgICAgICB0aGlzLnBsYXllci54ID0gMTAwO1xuICAgICAgICB0aGlzLnBsYXllci55ID0gMTAwO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcChcImxldmVsMVwiLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcbiAgICAgICAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS53YXRjaCh0aGlzLnBsYXllcik7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy5vcmMudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS51cGRhdGUodGltZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xuICAgICAgICAvL3RoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5wbGF5ZXIudmlldyk7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg1MCw3MCxcItCX0LDQs9GA0YPQt9C60LAuLi5cIik7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsIFwi0J3QsNC20LzQuNGC0LUg0L/RgNC+0LHQtdC7XCIpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRDYW1lcmEoY2FtZXJhKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OyAgICAgICAgXG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcbiAgICAgICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xuICAgICAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJvdywgY29sO1xuICAgICAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICBsYXllci5kYXRhLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2wrKztcbiAgICAgICAgICAgICAgICAgICAgaWYoY29sID4gKG1hcERhdGEud2lkdGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsYXllci50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuICAgICAgICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAob2JqID0+ICh7eDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZU1hcCh7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiAwLFxuICAgICAgICAgICAgc291cmNlWTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgaGl0Ym94ZXM6IGhpdGJveGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbGwoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHByaW50KHgsIHksIHRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjJweCBHZW9yZ2lhXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG5cbiAgICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSwgeCwgeSk7XG4gICAgfVxuXG4gICAgZHJhd1Nwcml0ZShzcHJpdGUpIHtcblxuICAgICAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xuICAgICAgICBsZXQgc3ByaXRlWSA9IHNwcml0ZS55O1xuXG4gICAgICAgIGlmKHRoaXMuaXNDYW1lcmFTZXQpIHtcbiAgICAgICAgICAgIHNwcml0ZVggLT0gdGhpcy5jYW1lcmEueDtcbiAgICAgICAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKFxuICAgICAgICAgICAgKHNwcml0ZVggPj0gdGhpcy53aWR0aCkgfHxcbiAgICAgICAgICAgIChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KSB8fCBcbiAgICAgICAgICAgICgoc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgPD0gMCkgfHxcbiAgICAgICAgICAgICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvdXJjZVggPSBzcHJpdGUuc291cmNlWCArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVgpKTtcbiAgICAgICAgbGV0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcbiAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgc291cmNlWCwgXG4gICAgICAgICAgICBzb3VyY2VZLCBcbiAgICAgICAgICAgIHdpZHRoLCBcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVgpLCBcbiAgICAgICAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVkpLCBcbiAgICAgICAgICAgIHdpZHRoLCBcbiAgICAgICAgICAgIGhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NH0pIHtcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodDtcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKGluZGV4ID0+ICh7c3g6IHRoaXMuZ2V0U291cmNlWChpbmRleCksIHN5OiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpfSkpLFxuICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgICBhdXRvcnVuOiBhdXRvcnVuLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNwcml0ZShpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZSh7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlWChpbmRleCkge1xuICAgICAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcbiAgICB9XG5cbiAgICBnZXRTb3VyY2VZKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9NjR9KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH1cblxuICAgIHNldFhZKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgICAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzcGVlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzcGVlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IC1zcGVlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==