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
    _classCallCheck(this, GameLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.screen.fill('#000000');

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
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2wtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNjcmVlbiIsIlNjcmVlbiIsImxvYWRJbWFnZXMiLCJvcmMiLCJwbGF5ZXIiLCJ0aXRsZSIsInRpbGVzIiwiY29udHJvbCIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJnYW1lTGV2ZWwiLCJHYW1lTGV2ZWwiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJTVEFSVF9HQU1FIiwidGltZSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJuYW1lIiwicHVzaCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJzcmMiLCJyZXNvbHZlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJydW4iLCJnYW1lIiwiY29uc3RydWN0b3IiLCJmaWxsIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0IiwiaW1hZ2VOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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V0FBZCxDQUEwQmQsTUFBMUI7QUFDQUEsWUFBTSxDQUFDdEQsS0FBUCxHQUFlQSxLQUFmO0FBQ0FzRCxZQUFNLENBQUNyRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBLGFBQU9xRCxNQUFQO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLHlCQTJCU2UsS0EzQlQsRUEyQmdCO0FBQ1IsV0FBS2IsT0FBTCxDQUFhYyxTQUFiLEdBQXlCRCxLQUF6QjtBQUNBLFdBQUtiLE9BQUwsQ0FBYWUsUUFBYixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixLQUFLdkUsS0FBakMsRUFBd0MsS0FBS0MsTUFBN0M7QUFDSDtBQTlCTDtBQUFBO0FBQUEsMEJBZ0NVdUUsQ0FoQ1YsRUFnQ2FDLENBaENiLEVBZ0NnQkMsSUFoQ2hCLEVBZ0NzQjtBQUNkLFdBQUtsQixPQUFMLENBQWFjLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLZCxPQUFMLENBQWFtQixJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsV0FBS25CLE9BQUwsQ0FBYW9CLFFBQWIsQ0FBc0JGLElBQXRCLEVBQTRCRixDQUE1QixFQUErQkMsQ0FBL0I7QUFDSDtBQXBDTDtBQUFBO0FBQUEsOEJBc0NjRCxDQXRDZCxFQXNDaUJDLENBdENqQixFQXNDb0JJLFNBdENwQixFQXNDK0I7QUFDdkIsV0FBS3JCLE9BQUwsQ0FBYUgsU0FBYixDQUF1QixLQUFLdEIsTUFBTCxDQUFZOEMsU0FBWixDQUF2QixFQUErQ0wsQ0FBL0MsRUFBa0RDLENBQWxEO0FBQ0g7QUF4Q0w7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbMzcsJ2xlZnQnXSxbMzksJ3JpZ2h0J10sWzM4LCd1cCddLFs0MCwnZG93biddLFszMiwnZmlyZSddXG4gICAgICAgIF0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XG4gICAgICAgIGlmKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XG5cdFx0XHRvcmM6ICdpbWcvb3JjLnBuZycsXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXG5cdFx0XHR0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxuXHRcdFx0dGlsZXM6ICdpbWcvdGlsZXMucG5nJyAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxuICAgICAgICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXG4gICAgICAgICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFNjZW5lLkxPQURFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyYW1lKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSx0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xuICAgIGVsdmVuU2NvdXQucnVuKCk7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxuICAgIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cbiAgICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cbiAgICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gICAgfVxuXG4gICAgZmluaXNoKHN0YXR1cykge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICByZW5kZXIgKHRpbWUpIHtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDAwMDBcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDI1MCwgNTAwLCBcItCd0LDQttC80LjRgtC1INC/0YDQvtCx0LXQu1wiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJ1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OyAgICAgICAgXG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgZmlsbChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpbnQoeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMnB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==