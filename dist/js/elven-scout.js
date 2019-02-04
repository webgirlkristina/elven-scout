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
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
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
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].LOADED:
          return this.scenes.menu;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].WORKING) {
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
    key: "render",
    value: function render(time) {
      this.game.screen.drawImage(0, 0, 'title');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJHYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJ0aW1lIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsInJ1biIsImdhbWUiLCJjb25zdHJ1Y3RvciIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJ1cGRhdGUiLCJmaWxsIiwicHJpbnQiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxvYWRlciIsImxvYWQiLCJ0aGVuIiwibmFtZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJ5IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsImltYWdlTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQThDO0FBQUEsbUZBQUosRUFBSTtBQUFBLDBCQUFqQ0MsS0FBaUM7QUFBQSxRQUFqQ0EsS0FBaUMsMkJBQXpCLEdBQXlCO0FBQUEsMkJBQXBCQyxNQUFvQjtBQUFBLFFBQXBCQSxNQUFvQiw0QkFBWCxHQUFXOztBQUFBOztBQUMxQyxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsOENBQUosQ0FBV0gsS0FBWCxFQUFpQkMsTUFBakIsQ0FBZDtBQUNB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QUFQO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLHlCQTJCU2dCLEtBM0JULEVBMkJnQjtBQUNSLFdBQUtkLE9BQUwsQ0FBYWUsU0FBYixHQUF5QkQsS0FBekI7QUFDQSxXQUFLZCxPQUFMLENBQWFnQixRQUFiLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUtyRSxLQUFqQyxFQUF3QyxLQUFLQyxNQUE3QztBQUNIO0FBOUJMO0FBQUE7QUFBQSwwQkFnQ1VxRSxDQWhDVixFQWdDYUMsQ0FoQ2IsRUFnQ2dCQyxJQWhDaEIsRUFnQ3NCO0FBQ2QsV0FBS25CLE9BQUwsQ0FBYWUsU0FBYixHQUF5QixTQUF6QjtBQUNBLFdBQUtmLE9BQUwsQ0FBYW9CLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxXQUFLcEIsT0FBTCxDQUFhcUIsUUFBYixDQUFzQkYsSUFBdEIsRUFBNEJGLENBQTVCLEVBQStCQyxDQUEvQjtBQUNIO0FBcENMO0FBQUE7QUFBQSw4QkFzQ2NELENBdENkLEVBc0NpQkMsQ0F0Q2pCLEVBc0NvQkksU0F0Q3BCLEVBc0MrQjtBQUN2QixXQUFLdEIsT0FBTCxDQUFhSCxTQUFiLENBQXVCLEtBQUt2QixNQUFMLENBQVlnRCxTQUFaLENBQXZCLEVBQStDTCxDQUEvQyxFQUFrREMsQ0FBbEQ7QUFDSDtBQXhDTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvZWx2ZW4tc2NvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XG5cdFx0XHRvcmM6ICdpbWcvb3JjLnBuZycsXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXG5cdFx0XHR0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxuXHRcdFx0dGlsZXM6ICdpbWcvdGlsZXMucG5nJyAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmFtZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcbiAgICBlbHZlblNjb3V0LnJ1bigpO1xufTtcbiIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cbiAgICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cblxuICAgIGZpbmlzaChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgcmVuZGVyICh0aW1lKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcblxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDAgJiYgdGhpcy5nYW1lLnNjcmVlbi5pc0ltYWdlc0xvYWRlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoXCIjMDAwMDAwXCIpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLDcwLFwi0JfQsNCz0YDRg9C30LrQsC4uLlwiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJ1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OyAgICAgICAgXG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgZmlsbChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpbnQoeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMnB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==