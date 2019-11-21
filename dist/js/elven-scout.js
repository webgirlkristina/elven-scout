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

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  function AI() {
    _classCallCheck(this, AI);

    this.body = null;
  }

  _createClass(AI, [{
    key: "control",
    value: function control(body) {
      this.body = body;
    }
  }, {
    key: "update",
    value: function update(time) {}
  }]);

  return AI;
}();

/***/ }),

/***/ "./src/ais/dummy.js":
/*!**************************!*\
  !*** ./src/ais/dummy.js ***!
  \**************************/
/*! exports provided: Dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dummy", function() { return Dummy; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
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


var Dummy =
/*#__PURE__*/
function (_AI) {
  _inherits(Dummy, _AI);

  function Dummy() {
    var _this;

    _classCallCheck(this, Dummy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this));
    _this.duration = 1000;
    _this.direction = "down";
    _this.lastTime = 0;
    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      this.direction = "down,up,left,right".split(',')[Math.floor(Math.random() * 4)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (time - this.lastTime > this.duration) {
        this.changeDirection();
        this.lastTime = time;
      }

      this.body.walk(this.direction);

      _get(_getPrototypeOf(Dummy.prototype), "update", this).call(this, time);
    }
  }]);

  return Dummy;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

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
    _this.onEnd = null;
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
        if (this.onEnd) {
          this.onEnd();
        }

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
    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
    this.isShooting = false;
    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 20, false);
    });
    this.stand("down");
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot() {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations["shoot_" + this.velocity.direction];

        this.view.onEnd = function () {
          return _this2.isShooting = false;
        };

        this.view.run();
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_" + direction];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      if (this.isShooting) return;
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

      if (!this.isShooting) {
        this.velocity.move(this, time - this.lastTime);
      }

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

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collider =
/*#__PURE__*/
function () {
  function Collider() {
    _classCallCheck(this, Collider);

    this.staticShapes = [];
    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        if (layer.type == "objectgroup") {
          var _this$staticShapes;

          (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
        }
      });
    }
  }, {
    key: "addKinematicBody",
    value: function addKinematicBody(body) {
      this.bodies.push({
        x: body.x,
        y: body.y,
        obj: body
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkStatic(time);
    }
  }, {
    key: "checkStatic",
    value: function checkStatic(time) {
      var _this2 = this;

      this.bodies.forEach(function (body) {
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y; //moving right

        if (x > oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;
            }
          });
        } //moving left


        if (x < oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;
            }
          });
        } //moving down


        if (y > oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;
            }
          });
        } //moving up


        if (y < oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;
            }
          });
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      });
    }
  }]);

  return Collider;
}();

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

/***/ "./src/orc.js":
/*!********************!*\
  !*** ./src/orc.js ***!
  \********************/
/*! exports provided: Orc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orc", function() { return Orc; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Orc =
/*#__PURE__*/
function (_Body) {
  _inherits(Orc, _Body);

  function Orc() {
    var _this;

    _classCallCheck(this, Orc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orc).call(this, {
      imageName: "orc",
      speed: 50
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Orc, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);

      _get(_getPrototypeOf(Orc.prototype), "update", this).call(this, time);
    }
  }]);

  return Orc;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

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
      if (this.control.fire) {
        this.shoot();
      } else if (this.control.up) {
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
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orc */ "./src/orc.js");
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

    _this.tree.setXY(10, 10); //this.orcTiles = new CharacterSheet({imageName: "orc"});


    _this.orc = new _orc__WEBPACK_IMPORTED_MODULE_6__["Orc"]();
    _this.orc.x = 500;
    _this.orc.y = 300;
    _this.player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;
    _this.collider = new _collider__WEBPACK_IMPORTED_MODULE_5__["Collider"]();
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
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.orc);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
      this.player.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc.view);
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
  }, {
    key: "move",
    value: function move(object, dt) {
      object.x += dt * (this.x / 1000);
      object.y += dt * (this.y / 1000);
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiXSwibmFtZXMiOlsiQUkiLCJib2R5IiwidGltZSIsIkR1bW15IiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJsYXN0VGltZSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmdlRGlyZWN0aW9uIiwid2FsayIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImN1cnJlbnRGcmFtZSIsInRvdGFsRnJhbWVzIiwibGVuZ3RoIiwib25FbmQiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkJvZHkiLCJ4IiwieSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImNvbGxpc2lvblNoYXBlIiwiaXNTaG9vdGluZyIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJmb3JFYWNoIiwibmFtZSIsImdldEFuaW1hdGlvbiIsInN0YW5kIiwidmlldyIsInJ1biIsInNldERpcmVjdGlvbiIsIm1vdmUiLCJzZXRYWSIsInRydW5jIiwidXBkYXRlIiwiQ2FtZXJhIiwibGltaXRYIiwibGltaXRZIiwic2Nyb2xsRWRnZSIsIndhdGNoT2JqZWN0Iiwib2JqIiwibWluIiwibWF4IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJsYXllciIsImZpbHRlciIsImkiLCJTcHJpdGVTaGVldCIsIkNvbGxpZGVyIiwic3RhdGljU2hhcGVzIiwiYm9kaWVzIiwidHlwZSIsInB1c2giLCJvYmplY3RzIiwiY2hlY2tTdGF0aWMiLCJvbGRYIiwib2xkWSIsInNoYXBlIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiT3JjIiwiYWkiLCJQbGF5ZXIiLCJzaG9vdCIsImdhbWUiLCJjb25zdHJ1Y3RvciIsInRyZWUiLCJnZXRTcHJpdGUiLCJjb2xsaWRlciIsIm1hcERhdGEiLCJtYXAiLCJjcmVhdGVNYXAiLCJtYWluQ2FtZXJhIiwid2F0Y2giLCJzZXRDYW1lcmEiLCJhZGRTdGF0aWNTaGFwZXMiLCJhZGRLaW5lbWF0aWNCb2R5IiwiZmlsbCIsImRyYXdTcHJpdGUiLCJsb2FkZWRBdCIsImlzSW1hZ2VzTG9hZGVkIiwiZmluaXNoIiwicHJpbnQiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsImlzQ2FtZXJhU2V0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwicHJvcHMiLCJvYmplY3QiLCJkdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLEVBQWI7QUFBQTtBQUFBO0FBQ0ksZ0JBQWM7QUFBQTs7QUFDVixTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNIOztBQUhMO0FBQUE7QUFBQSw0QkFLWUEsSUFMWixFQUtrQjtBQUNWLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBUEw7QUFBQTtBQUFBLDJCQVNXQyxJQVRYLEVBU2lCLENBRVo7QUFYTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7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LFdBQUtXLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtvQixDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBUyxDQUFUOztBQUNBLGNBQU9oQyxTQUFQO0FBQ0ksYUFBSyxJQUFMO0FBQ0ksZUFBS2dDLENBQUwsR0FBUyxDQUFDckIsS0FBVjtBQUNKOztBQUVBLGFBQUssTUFBTDtBQUNJLGVBQUtxQixDQUFMLEdBQVNyQixLQUFUO0FBQ0o7O0FBRUEsYUFBSyxPQUFMO0FBQ0ksZUFBS29CLENBQUwsR0FBU3BCLEtBQVQ7QUFDSjs7QUFFQSxhQUFLLE1BQUw7QUFDSSxlQUFLb0IsQ0FBTCxHQUFTLENBQUNwQixLQUFWO0FBQ0o7QUFmSjtBQWtCSDtBQTVCTDtBQUFBO0FBQUEseUJBOEJTb00sTUE5QlQsRUE4QmlCQyxFQTlCakIsRUE4QnFCO0FBQ2JELFlBQU0sQ0FBQ2hMLENBQVAsSUFBWWlMLEVBQUUsSUFBSSxLQUFLakwsQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNBZ0wsWUFBTSxDQUFDL0ssQ0FBUCxJQUFZZ0wsRUFBRSxJQUFJLEtBQUtoTCxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0g7QUFqQ0w7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnRyb2woYm9keSkge1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge0FJIH0gZnJvbSBcIi4uL2FpXCI7XG5cbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDEwMDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd24sdXAsbGVmdCxyaWdodFwiLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpXTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSl7XG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcbiAgICAgICAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRGcmFtZShpbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xuICAgICAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpe1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0RnJhbWUoKSB7XG4gICAgICAgIGlmKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMub25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJlcGVhdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJkb3duXCIsIDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuY29sbGlzaW9uU2hhcGUgPSB7eDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDl9O1xuICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25TaGVldCA9IG5ldyBDaGFyYWN0ZXJTaGVldCh7aW1hZ2VOYW1lOiBpbWFnZU5hbWV9KTtcbiAgICAgICAgXCJ3YWxrX2Rvd24sd2Fsa191cCx3YWxrX2xlZnQsd2Fsa19yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXCJzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCAyMCwgZmFsc2UpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICB0aGlzLnN0YW5kKFwiZG93blwiKTtcbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNTaG9vdGluZykge1xuICAgICAgICAgICAgdGhpcy5pc1Nob290aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcInNob290X1wiICsgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb25dO1xuICAgICAgICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCkgPT4gdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZXcucnVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3YWxrKGRpcmVjdGlvbikge1xuICAgICAgICBpZih0aGlzLmlzU2hvb3RpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wid2Fsa19cIiArIGRpcmVjdGlvbl07XG4gICAgICAgIHRoaXMudmlldy5ydW4oKTtcbiAgICB9XG5cbiAgICBzdGFuZChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYodGhpcy5pc1Nob290aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcIndhbGtfXCIgKyBkaXJlY3Rpb25dO1xuICAgICAgICB0aGlzLnZpZXcuc3RvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMuaXNTaG9vdGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XG4gICAgfVxuXG4gICAgd2F0Y2gob2JqKSB7XG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLndhdGNoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZih0aGlzLm9iai54ID4gKHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5vYmoueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPCAodGhpcy55ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4vc3ByaXRlLXNoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTaGVldCBleHRlbmRzIFNwcml0ZVNoZWV0IHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDgzMixcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHRoaXMuZ2V0U2VxdWVuY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0U2VxdWVuY2VzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9tYXBzL2FuaW1hdGlvbnMuanNvbicpO1xuICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcbiAgICAgICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBzZXF1ZW5jZXNbbGF5ZXIubmFtZV0gPSBsYXllci5kYXRhLmZpbHRlcihpID0+IGkgPiAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZXF1ZW5jZXM7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKG5hbWUsIHNwZWVkID0gMTAwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRTdGF0aWNTaGFwZXMoZGF0YSkge1xuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkS2luZW1hdGljQm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuYm9kaWVzLnB1c2goe1xuICAgICAgICAgICAgeDogYm9keS54LFxuICAgICAgICAgICAgeTogYm9keS55LFxuICAgICAgICAgICAgb2JqOiBib2R5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTdGF0aWModGltZSk7XG4gICAgfVxuXG4gICAgY2hlY2tTdGF0aWModGltZSkge1xuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFggPSBib2R5Lng7XG4gICAgICAgICAgICBsZXQgb2xkWSA9IGJvZHkueTtcbiAgICAgICAgICAgIGxldCB4ID0gYm9keS5vYmoueDtcbiAgICAgICAgICAgIGxldCB5ID0gYm9keS5vYmoueTtcbiAgICAgICAgICAgIC8vbW92aW5nIHJpZ2h0XG4gICAgICAgICAgICBpZih4ID4gb2xkWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWCAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUueCkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueCkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUueCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9tb3ZpbmcgbGVmdFxuICAgICAgICAgICAgaWYoeCA8IG9sZFgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFggKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPiAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAsIHNoYXBlLnggKyBzaGFwZS53aWR0aCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vbW92aW5nIGRvd25cbiAgICAgICAgICAgIGlmKHkgPiBvbGRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCggc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUueSkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9tb3ZpbmcgdXBcbiAgICAgICAgICAgIGlmKHkgPCBvbGRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCggc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWSArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA+IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBib2R5LnggPSB4O1xuICAgICAgICAgICAgYm9keS55ID0geTtcbiAgICAgICAgICAgIGJvZHkub2JqLnggPSB4O1xuICAgICAgICAgICAgYm9keS5vYmoueSA9IHk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgWzM3LCdsZWZ0J10sWzM5LCdyaWdodCddLFszOCwndXAnXSxbNDAsJ2Rvd24nXSxbMzIsJ2ZpcmUnXVxuICAgICAgICBdKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xuICAgICAgICBpZih0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJ1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xuXHRcdFx0b3JjOiAnaW1nL29yYy5wbmcnLFxuXHRcdFx0cGxheWVyOiAnaW1nL3BsYXllci5wbmcnLFxuXHRcdFx0dGl0bGU6ICdpbWcvdGl0bGUuanBnJyxcblx0XHRcdHRpbGVzOiAnaW1nL3RpbGVzLnBuZycgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmFtZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcbiAgICBlbHZlblNjb3V0LnJ1bigpO1xufTtcbiIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5pbXBvcnQgeyBEdW1teSB9IGZyb20gXCIuL2Fpcy9kdW1teVwiO1xuXG5leHBvcnQgY2xhc3MgT3JjIGV4dGVuZHMgQm9keSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwib3JjXCIsIHNwZWVkOiA1MH0pO1xuICAgICAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XG4gICAgICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQm9keSB7XG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xuICAgICAgICBzdXBlcih7aW1hZ2VOYW1lOiBcInBsYXllclwiLCBzcGVlZDogNTB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLmNvbnRyb2wuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLnVwKSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJ1cFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5kb3duKSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJkb3duXCIpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcInJpZ2h0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cbiAgICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cblxuICAgIGZpbmlzaChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgcmVuZGVyICh0aW1lKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi4vY2hhcmFjdGVyLXNoZWV0JztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuLi9jYW1lcmEnO1xuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tICcuLi9jb2xsaWRlcic7XG5pbXBvcnQgeyBPcmMgfSBmcm9tICcuLi9vcmMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XG4gICAgICAgIHRoaXMudHJlZS5zZXRYWSgxMCwgMTApO1xuICAgICAgICAvL3RoaXMub3JjVGlsZXMgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogXCJvcmNcIn0pO1xuICAgICAgICB0aGlzLm9yYyA9IG5ldyBPcmMoKTtcbiAgICAgICAgdGhpcy5vcmMueCA9IDUwMDtcbiAgICAgICAgdGhpcy5vcmMueSA9IDMwMDtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wpO1xuICAgICAgICB0aGlzLnBsYXllci54ID0gMTAwO1xuICAgICAgICB0aGlzLnBsYXllci55ID0gMTAwO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgICAgIGNvbnN0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoXCJsZXZlbDFcIiwgbWFwRGF0YSwgdGhpcy50aWxlcyk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxuICAgICAgICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5vcmMpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMub3JjLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYy52aWV3KTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDAwMDBcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDI1MCwgNTAwLCBcItCd0LDQttC80LjRgtC1INC/0YDQvtCx0LXQu1wiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZS1tYXAnO1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0Q2FtZXJhKGNhbWVyYSkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcihpbWFnZUZpbGVzKTtcbiAgICAgICAgbG9hZGVyLmxvYWQoKS50aGVuKChuYW1lcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDsgICAgICAgIFxuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cblxuICAgIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XG4gICAgICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIG1hcEltYWdlLndpZHRoID0gbWFwRGF0YS53aWR0aCAqIG1hcERhdGEudGlsZXdpZHRoO1xuICAgICAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcbiAgICAgICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGhpdGJveGVzID0gW107XG4gICAgICAgIGxldCByb3csIGNvbDtcbiAgICAgICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBpZihsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1t0aWxlc2V0LmltYWdlTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNldC5nZXRTb3VyY2VYKGluZGV4KSwgdGlsZXNldC5nZXRTb3VyY2VZKGluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCAqIG1hcERhdGEudGlsZXdpZHRoLCByb3cgKiBtYXBEYXRhLnRpbGVoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sKys7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMubWFwKG9iaiA9PiAoe3gxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHR9KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xuICAgICAgICByZXR1cm4gbmV3IFRpbGVNYXAoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxuICAgICAgICAgICAgc291cmNlWDogMCxcbiAgICAgICAgICAgIHNvdXJjZVk6IDAsXG4gICAgICAgICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcEltYWdlLmhlaWdodCxcbiAgICAgICAgICAgIGhpdGJveGVzOiBoaXRib3hlc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaWxsKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcmludCh4LCB5LCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuXG4gICAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdTcHJpdGUoc3ByaXRlKSB7XG5cbiAgICAgICAgbGV0IHNwcml0ZVggPSBzcHJpdGUueDtcbiAgICAgICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcblxuICAgICAgICBpZih0aGlzLmlzQ2FtZXJhU2V0KSB7XG4gICAgICAgICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XG4gICAgICAgICAgICBzcHJpdGVZIC09IHRoaXMuY2FtZXJhLnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihcbiAgICAgICAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpIHx8XG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgfHwgXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApIHx8XG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzb3VyY2VYID0gc3ByaXRlLnNvdXJjZVggKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVYKSk7XG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGgsIHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWCk7XG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLmhlaWdodCwgc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tzcHJpdGUuaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgIHNvdXJjZVgsIFxuICAgICAgICAgICAgc291cmNlWSwgXG4gICAgICAgICAgICB3aWR0aCwgXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSwgXG4gICAgICAgICAgICBNYXRoLm1heCgwLCBzcHJpdGVZKSwgXG4gICAgICAgICAgICB3aWR0aCwgXG4gICAgICAgICAgICBoZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjR9KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKGluZGV4ZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcChpbmRleCA9PiAoe3N4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSxcbiAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgYXV0b3J1bjogYXV0b3J1bixcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTcHJpdGUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBzb3VyY2VYLCBzb3VyY2VZLCB3aWR0aCA9IDY0LCBoZWlnaHQgPTY0fSkge1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG5cbiAgICBzZXRYWSh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcbiAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCk7XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLXNwZWVkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnggPSAtc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZShvYmplY3QsIGR0KSB7XG4gICAgICAgIG9iamVjdC54ICs9IGR0ICogKHRoaXMueCAvIDEwMDApO1xuICAgICAgICBvYmplY3QueSArPSBkdCAqICh0aGlzLnkgLyAxMDAwKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==