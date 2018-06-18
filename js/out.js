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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*function Game() {\n    this.width = 10,\n        this.height = 10,\n        this.board = document.querySelectorAll(\"#board div\"),\n        this.furry = new Furry,\n        this.coin = new Coin,\n        this.score = 0,\n        this.scoreElement = document.querySelector(\"#score strong\"),\n        self = this,\n        this.handler = setInterval(this.tick, 500);\n    document.addEventListener(\"keydown\", this.keyboard);\n\n    function Furry() {\n        this.x = 0,\n            this.y = 0,\n            this.direction = \"right\"\n    };\n\n    function Coin() {\n        this.x = Math.floor(10 * Math.random()),\n            this.y = Math.floor(10 * Math.random())\n    };\n}\n    var self;\n\n    Game.prototype.position = function (a, b) {\n        return a + b * this.height\n    },\n\n    Game.prototype.render = function () {\n        for (var a = 0; a < this.board.length; a++) {\n            this.board[a].classList.remove(\"furry\");\n            var b = this.position(this.coin.x, this.coin.y);\n            this.board[b].classList.add(\"coin\");\n            var c = this.position(this.furry.x, this.furry.y);\n            this.board[c].classList.add(\"furry\")\n        }\n    };\n\n    Game.prototype.check = function () {\n        (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) && (clearInterval(this.handler),\n            document.querySelector(\"#board\").classList.add(\"invisible\"),\n            document.querySelector(\"#game-over\").classList.remove(\"invisible\"));\n        var a = this.position(this.furry.x, this.furry.y);\n        this.furry.x === this.coin.x && this.furry.y === this.coin.y && (this.score++,\n            this.scoreElement.innerHTML = this.score,\n            this.board[a].classList.remove(\"coin\"),\n            this.coin = new Coin)\n    },\n\n        Game.prototype.keyboard = function (a) {\n            var b = a.which;\n            switch (b) {\n                case 37:\n                    self.furry.direction = \"left\";\n                    break;\n                case 38:\n                    self.furry.direction = \"up\";\n                    break;\n                case 39:\n                    self.furry.direction = \"right\";\n                    break;\n                case 40:\n                    self.furry.direction = \"down\"\n            }\n        },\n\n        Game.prototype.tick = function () {\n            switch (self.check(), self.furry.direction) {\n                case\"up\":\n                    self.furry.y--;\n                    break;\n                case\"down\":\n                    self.furry.y++;\n                    break;\n                case\"left\":\n                    self.furry.x--;\n                    break;\n                case\"right\":\n                    self.furry.x++\n            }\n            self.render()\n        }\n\n    document.addEventListener(\"DOMContentLoaded\",function(){new Game});*/\n\nconsole.log(\"Hello\");\n\nvar Furry = function Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nvar Coin = function Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nfunction getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nvar Game = function Game() {\n    self = this;\n    this.board = document.querySelectorAll(\"section#board div\");\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n    this.scoreElement = document.querySelector(\"#score strong\");\n\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    //Usuwanie klonów Furrego, pkt. 9\n    this.hideVisibleFurry = function () {\n        var furryOnBoard = document.querySelector('.furry');\n        if (furryOnBoard !== null) {\n            furryOnBoard.classList.remove('furry');\n        }\n    };\n\n    this.showFurry = function () {\n        this.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n    //Furry musi się ruszać\n    this.moveFurry = function () {\n        var self = this;\n        if (self.furry.direction === 'right') {\n            self.furry.x = self.furry.x + 1;\n        } else if (self.furry.direction === 'left') {\n            self.furry.x = self.furry.x - 1;\n        } else if (self.furry.direction === 'up') {\n            self.furry.y = self.furry.y - 1;\n        } else if (self.furry.direction === 'down') {\n            self.furry.y = self.furry.y + 1;\n        }\n        this.gameOver();\n        this.showFurry();\n        this.checkCoinCollision();\n    };\n\n    //Fury musi reagować na obsługę klawiaturą\n    this.turnFurry = function (e) {\n        var a = e.which;\n        switch (a) {\n            case 37:\n                self.furry.direction = 'left';\n                break;\n            case 38:\n                self.furry.direction = 'up';\n                break;\n            case 39:\n                self.furry.direction = 'right';\n                break;\n            case 40:\n                self.furry.direction = 'down';\n        }\n    };\n\n    //Sprawdzanie kolizji z monetą\n    this.checkCoinCollision = function () {\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n            var checkCoinPosition = this.index(this.coin.x, this.coin.y);\n            this.board[checkCoinPosition].classList.remove('coin');\n            this.score++;\n            this.scoreElement.innerText = this.score;\n            this.coin = new Coin();\n            this.showCoin();\n\n            var boardGame = document.querySelector('#board');\n            var scoreBoard = document.querySelector('#score div');\n            var h = getRandomInt(0, 360);\n            var s = getRandomInt(0, 100);\n            var l = getRandomInt(60, 80);\n            boardGame.style.backgroundColor = \"hsl(\" + h + \",\" + s + \"%,\" + l + \"%\" + \")\";\n            scoreBoard.style.backgroundColor = \"hsl(\" + h + \",\" + s + \"%,\" + l + \"%\" + \")\";\n        }\n    };\n\n    this.startGame = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n        }, 250);\n    };\n\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            alert('GAME OVER!\\nTRY AGAIN');\n            clearInterval(this.idSetInterval);\n            this.hideVisibleFurry();\n\n            document.querySelector('#score').classList.add('invisible');\n            document.querySelector('#board').classList.add('invisible');\n            var gameOverSection = document.querySelector('#over');\n            gameOverSection.classList.remove('invisible');\n            gameOverSection.style.backgroundColor = \"white\";\n\n            if (this.score === 1) {\n                gameOverSection.innerText = \"Congratulations! \" + \"You won: \" + this.scoreElement.innerText + \" point\";\n            } else if (this.score === 0) {\n                gameOverSection.innerText = \"Sorry! \" + \"You won: \" + this.scoreElement.innerText + \" points\";\n            } else {\n                gameOverSection.innerText = \"Congratulations! \" + \"You won: \" + this.scoreElement.innerText + \" points\";\n            }\n        }\n    };\n};\n\nvar game = new Game();\ngame.showFurry();\ngame.showCoin();\ngame.startGame();\n\ndocument.addEventListener('keydown', function (e) {\n    game.turnFurry(e);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });