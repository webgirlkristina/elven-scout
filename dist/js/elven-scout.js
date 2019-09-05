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
    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
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
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS1zaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImxhc3RUaW1lIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsInRpbWUiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJCb2R5IiwieCIsInkiLCJ2ZWxvY2l0eSIsIlZlY3RvciIsImFuaW1hdGlvbnMiLCJjb2xsaXNpb25TaGFwZSIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJzcGxpdCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwic3RhbmQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ2aWV3IiwicnVuIiwic2V0WFkiLCJNYXRoIiwidHJ1bmMiLCJ1cGRhdGUiLCJDYW1lcmEiLCJsaW1pdFgiLCJsaW1pdFkiLCJzY3JvbGxFZGdlIiwid2F0Y2hPYmplY3QiLCJvYmoiLCJtaW4iLCJtYXgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29sbGlkZXIiLCJzdGF0aWNTaGFwZXMiLCJib2RpZXMiLCJ0eXBlIiwicHVzaCIsIm9iamVjdHMiLCJib2R5IiwiY2hlY2tTdGF0aWMiLCJvbGRYIiwib2xkWSIsInNoYXBlIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiUGxheWVyIiwid2FsayIsImdhbWUiLCJjb25zdHJ1Y3RvciIsInRyZWUiLCJnZXRTcHJpdGUiLCJvcmNUaWxlcyIsImNvbGxpZGVyIiwibWFwRGF0YSIsIm1hcCIsImNyZWF0ZU1hcCIsIm1haW5DYW1lcmEiLCJ3YXRjaCIsInNldENhbWVyYSIsImFkZFN0YXRpY1NoYXBlcyIsImFkZEtpbmVtYXRpY0JvZHkiLCJmaWxsIiwiZHJhd1Nwcml0ZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2FtZXJhIiwiaXNDYW1lcmFTZXQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngxIiwieDIiLCJ5MSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlWCIsInNwcml0ZVkiLCJhYnMiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImluZGV4ZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6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QUFLcUIsQ0FBTCxHQUFTckIsS0FBVDtBQUNKOztBQUVBLGFBQUssTUFBTDtBQUNJLGVBQUtxQixDQUFMLEdBQVMsQ0FBQ3JCLEtBQVY7QUFDSjtBQWZKO0FBa0JIO0FBNUJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9lbHZlbi1zY291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxuICAgICAgICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxuICAgICAgICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBpZighdGhpcy5ydW5uaW5nKXtcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV4dEZyYW1lKCkge1xuICAgICAgICBpZigodGhpcy5jdXJyZW50RnJhbWUgKyAxKSA9PSB0aGlzLnRvdGFsRnJhbWVzKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlcGVhdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJkb3duXCIsIDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuY29sbGlzaW9uU2hhcGUgPSB7eDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDl9O1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IGltYWdlTmFtZX0pO1xuICAgICAgICBcIndhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0XCIuc3BsaXQoXCIsXCIpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YW5kKFwiZG93blwiKTtcbiAgICB9XG5cbiAgICB3YWxrKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcbiAgICAgICAgdGhpcy52aWV3LnJ1bigpO1xuICAgIH1cblxuICAgIHN0YW5kKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIDApO1xuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcbiAgICAgICAgdGhpcy52aWV3LnN0b3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ICs9ICh0aW1lIC0gdGhpcy5sYXN0VGltZSkgKiAodGhpcy52ZWxvY2l0eS54IC8gMTAwMCk7XG4gICAgICAgIHRoaXMueSArPSAodGltZSAtIHRoaXMubGFzdFRpbWUpICogKHRoaXMudmVsb2NpdHkueSAvIDEwMDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XG4gICAgfVxuXG4gICAgd2F0Y2gob2JqKSB7XG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLndhdGNoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZih0aGlzLm9iai54ID4gKHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5vYmoueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPCAodGhpcy55ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4vc3ByaXRlLXNoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTaGVldCBleHRlbmRzIFNwcml0ZVNoZWV0IHtcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDgzMixcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHRoaXMuZ2V0U2VxdWVuY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0U2VxdWVuY2VzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9tYXBzL2FuaW1hdGlvbnMuanNvbicpO1xuICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcbiAgICAgICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBzZXF1ZW5jZXNbbGF5ZXIubmFtZV0gPSBsYXllci5kYXRhLmZpbHRlcihpID0+IGkgPiAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZXF1ZW5jZXM7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKG5hbWUsIHNwZWVkID0gMTAwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRTdGF0aWNTaGFwZXMoZGF0YSkge1xuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkS2luZW1hdGljQm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuYm9kaWVzLnB1c2goe1xuICAgICAgICAgICAgeDogYm9keS54LFxuICAgICAgICAgICAgeTogYm9keS55LFxuICAgICAgICAgICAgb2JqOiBib2R5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTdGF0aWModGltZSk7XG4gICAgfVxuXG4gICAgY2hlY2tTdGF0aWModGltZSkge1xuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFggPSBib2R5Lng7XG4gICAgICAgICAgICBsZXQgb2xkWSA9IGJvZHkueTtcbiAgICAgICAgICAgIGxldCB4ID0gYm9keS5vYmoueDtcbiAgICAgICAgICAgIGxldCB5ID0gYm9keS5vYmoueTtcbiAgICAgICAgICAgIC8vbW92aW5nIHJpZ2h0XG4gICAgICAgICAgICBpZih4ID4gb2xkWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWCAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUueCkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueCkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUueCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9tb3ZpbmcgbGVmdFxuICAgICAgICAgICAgaWYoeCA8IG9sZFgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFggKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPiAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAsIHNoYXBlLnggKyBzaGFwZS53aWR0aCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vbW92aW5nIGRvd25cbiAgICAgICAgICAgIGlmKHkgPiBvbGRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCggc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUueSkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9tb3ZpbmcgdXBcbiAgICAgICAgICAgIGlmKHkgPCBvbGRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCggc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWSArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA+IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBib2R5LnggPSB4O1xuICAgICAgICAgICAgYm9keS55ID0geTtcbiAgICAgICAgICAgIGJvZHkub2JqLnggPSB4O1xuICAgICAgICAgICAgYm9keS5vYmoueSA9IHk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgWzM3LCdsZWZ0J10sWzM5LCdyaWdodCddLFszOCwndXAnXSxbNDAsJ2Rvd24nXSxbMzIsJ2ZpcmUnXVxuICAgICAgICBdKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xuICAgICAgICBpZih0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJ1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xuXHRcdFx0b3JjOiAnaW1nL29yYy5wbmcnLFxuXHRcdFx0cGxheWVyOiAnaW1nL3BsYXllci5wbmcnLFxuXHRcdFx0dGl0bGU6ICdpbWcvdGl0bGUuanBnJyxcblx0XHRcdHRpbGVzOiAnaW1nL3RpbGVzLnBuZycgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmFtZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcbiAgICBlbHZlblNjb3V0LnJ1bigpO1xufTtcbiIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwicGxheWVyXCIsIHNwZWVkOiA1MH0pO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmKHRoaXMuY29udHJvbC51cCkge1xuICAgICAgICAgICAgdGhpcy53YWxrKFwidXBcIik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wuZG93bikge1xuICAgICAgICAgICAgdGhpcy53YWxrKFwiZG93blwiKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJsZWZ0XCIpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJyaWdodFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhbmQodGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBXT1JLSU5HKCkgeyByZXR1cm4gJ1dPUktJTkcnOyB9XG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9PVkVSKCkgeyByZXR1cm4gJ0dBTUVfT1ZFUic7IH1cbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBmaW5pc2goc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIHJlbmRlciAodGltZSkge1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gJy4uL2NoYXJhY3Rlci1zaGVldCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9wbGF5ZXInO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnLi4vY2FtZXJhJztcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XG4gICAgICAgIHRoaXMudHJlZS5zZXRYWSgxMCwgMTApO1xuICAgICAgICB0aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcbiAgICAgICAgdGhpcy5vcmMgPSB0aGlzLm9yY1RpbGVzLmdldEFuaW1hdGlvbihcInN0YWJfZG93blwiKTtcbiAgICAgICAgdGhpcy5vcmMuc2V0WFkoMTAwLDEwKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wpO1xuICAgICAgICB0aGlzLnBsYXllci54ID0gMTAwO1xuICAgICAgICB0aGlzLnBsYXllci55ID0gMTAwO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgICAgIGNvbnN0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoXCJsZXZlbDFcIiwgbWFwRGF0YSwgdGhpcy50aWxlcyk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxuICAgICAgICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMub3JjLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcblxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDAgJiYgdGhpcy5nYW1lLnNjcmVlbi5pc0ltYWdlc0xvYWRlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoXCIjMDAwMDAwXCIpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLDcwLFwi0JfQsNCz0YDRg9C30LrQsC4uLlwiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLmdhbWUuY29udHJvbC5maXJlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgyNTAsIDUwMCwgXCLQndCw0LbQvNC40YLQtSDQv9GA0L7QsdC10LtcIik7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcidcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGUtbWFwJztcblxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZXMoaW1hZ2VGaWxlcykge1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG5cbiAgICBjcmVhdGVNYXAobmFtZSwgbWFwRGF0YSwgdGlsZXNldCkge1xuICAgICAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcbiAgICAgICAgbWFwSW1hZ2UuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQgKiBtYXBEYXRhLnRpbGVoZWlnaHQ7XG4gICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xuICAgICAgICBsZXQgcm93LCBjb2w7XG4gICAgICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIGxheWVyLmRhdGEuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICAgICAgICAgICAgICBpZihjb2wgPiAobWFwRGF0YS53aWR0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHt4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0fSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBtYXBJbWFnZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogbmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IDAsXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxuICAgICAgICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsbChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpbnQoeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMnB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcbiAgICB9XG5cbiAgICBkcmF3U3ByaXRlKHNwcml0ZSkge1xuXG4gICAgICAgIGxldCBzcHJpdGVYID0gc3ByaXRlLng7XG4gICAgICAgIGxldCBzcHJpdGVZID0gc3ByaXRlLnk7XG5cbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xuICAgICAgICAgICAgc3ByaXRlWCAtPSB0aGlzLmNhbWVyYS54O1xuICAgICAgICAgICAgc3ByaXRlWSAtPSB0aGlzLmNhbWVyYS55O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoXG4gICAgICAgICAgICAoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSB8fFxuICAgICAgICAgICAgKHNwcml0ZVkgPj0gdGhpcy5oZWlnaHQpIHx8IFxuICAgICAgICAgICAgKChzcHJpdGVYICsgc3ByaXRlLndpZHRoKSA8PSAwKSB8fFxuICAgICAgICAgICAgKChzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgPD0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xuICAgICAgICBsZXQgc291cmNlWSA9IHNwcml0ZS5zb3VyY2VZICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWSkpO1xuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLm1pbih0aGlzLndpZHRoLCBzcHJpdGVYICsgc3ByaXRlLndpZHRoKSAtIE1hdGgubWF4KDAsIHNwcml0ZVgpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbc3ByaXRlLmltYWdlTmFtZV0sXG4gICAgICAgICAgICBzb3VyY2VYLCBcbiAgICAgICAgICAgIHNvdXJjZVksIFxuICAgICAgICAgICAgd2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksIFxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksIFxuICAgICAgICAgICAgd2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSkge1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgICAgICB0aGlzLnNwcml0ZVdpZHRoID0gc3ByaXRlV2lkdGg7XG4gICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoaW5kZXggPT4gKHtzeDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6IHRoaXMuZ2V0U291cmNlWShpbmRleCl9KSksXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgICAgICAgIGF1dG9ydW46IGF1dG9ydW4sXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxuICAgICAgICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTb3VyY2VYKGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpICUgdGhpcy5pbWFnZVdpZHRoO1xuICAgIH1cblxuICAgIGdldFNvdXJjZVkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID02NH0pIHtcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuXG4gICAgc2V0WFkoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVNYXAgZXh0ZW5kcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkKSB7XG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC1zcGVlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHNwZWVkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHNwZWVkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gLXNwZWVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9