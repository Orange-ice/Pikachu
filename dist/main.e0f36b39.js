// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n.skin {\n    position: relative;\n    min-height: 50vh;\n    background: #ffe600;\n}\n\n.nose {\n    border: solid 10px;\n    height: 0;\n    width: 0;\n    border-bottom: 0;\n    border-color: black transparent transparent;\n    position: absolute;\n    top: 145px;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n}\n\n.eyes {\n    border: black solid 2px;\n    background-color: #2E2E2E;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    margin-left: -32px;\n    top: 100px;\n    border-radius: 50%;\n}\n\n.eyes::before {\n    content: '';\n    display: block;\n    width: 30px;\n    height: 30px;\n    border: solid 2px black;\n    background-color: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 4px;\n    top: 2px;\n}\n\n.eyes.left {\n    transform: translateX(-100px);\n}\n\n.eyes.right {\n    transform: translateX(100px);\n}\n\n.mouth {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    margin-left: -100px;\n    top: 170px;\n}\n\n.mouth .up {\n    position: relative;\n    top: -18px;\n    z-index: 1;\n}\n\n.mouth .up .lip {\n    position: absolute;\n    background-color: #ffe600;\n    left: 50%;\n    margin-left: -50px;\n    border: solid 3px black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n}\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background-color: #ffe600;\n}\n\n.mouth .up .lip.left::before {\n    right: -6px;\n}\n\n.mouth .up .lip.right::before {\n    left: -6px;\n}\n\n.mouth .down {\n    position: absolute;\n    width: 100%;\n    height: 180px;\n    overflow: hidden;\n    top: 5px;\n}\n\n.mouth .down .yuan1 {\n    border: solid 3px black;\n    width: 150px;\n    height: 1000px;\n    bottom: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    overflow: hidden;\n    background-color: #9B000A;\n}\n\n.mouth .down .yuan2 {\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n    background-color: #FF485F;\n}\n\n.face {\n    position: absolute;\n    border: solid 3px black;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    margin-left: -44px;\n    top: 200px;\n    background-color: #ff0000;\n    border-radius: 50%;\n}\n\n.face.left {\n    transform: translateX(-180px);\n}\n\n.face.right {\n    transform: translateX(180px);\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 80,
  n: 1,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 250;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 80;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.e0f36b39.js.map