module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/helloWorld/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helloWorld/implections/BanglaBookPrint.ts":
/*!*******************************************************!*\
  !*** ./src/helloWorld/implections/BanglaBookPrint.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BanglaBookPrint {
    constructor() {
        this.printType = "Bangla";
    }
    print() {
        return "Bangla book Printed";
    }
}
exports.BanglaBookPrint = BanglaBookPrint;


/***/ }),

/***/ "./src/helloWorld/implections/EnglishBookPrint.ts":
/*!********************************************************!*\
  !*** ./src/helloWorld/implections/EnglishBookPrint.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EnglishBookPrint {
    constructor() {
        this.printType = "English";
    }
    print() {
        return "English book Printed";
    }
}
exports.EnglishBookPrint = EnglishBookPrint;


/***/ }),

/***/ "./src/helloWorld/implections/NotBookPrinter.ts":
/*!******************************************************!*\
  !*** ./src/helloWorld/implections/NotBookPrinter.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NoBookPrint {
    constructor() {
        this.printType = "No";
    }
    print() {
        return "No book Printed";
    }
}
exports.NoBookPrint = NoBookPrint;


/***/ }),

/***/ "./src/helloWorld/implections/Printer.ts":
/*!***********************************************!*\
  !*** ./src/helloWorld/implections/Printer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BanglaBookPrint_1 = __webpack_require__(/*! ./BanglaBookPrint */ "./src/helloWorld/implections/BanglaBookPrint.ts");
const EnglishBookPrint_1 = __webpack_require__(/*! ./EnglishBookPrint */ "./src/helloWorld/implections/EnglishBookPrint.ts");
const SpanishBookPrint_1 = __webpack_require__(/*! ./SpanishBookPrint */ "./src/helloWorld/implections/SpanishBookPrint.ts");
const NotBookPrinter_1 = __webpack_require__(/*! ./NotBookPrinter */ "./src/helloWorld/implections/NotBookPrinter.ts");
class Printer {
    constructor() {
        this.printers = [];
        this.printers.push(new BanglaBookPrint_1.BanglaBookPrint());
        this.printers.push(new EnglishBookPrint_1.EnglishBookPrint());
        this.printers.push(new SpanishBookPrint_1.SpanishBookPrint());
    }
    getPrinter(printType) {
        let printTask = new NotBookPrinter_1.NoBookPrint();
        this.printers.forEach(element => {
            if (element.printType === printType) {
                printTask = element;
                return;
            }
        });
        return printTask;
    }
}
exports.Printer = Printer;


/***/ }),

/***/ "./src/helloWorld/implections/SpanishBookPrint.ts":
/*!********************************************************!*\
  !*** ./src/helloWorld/implections/SpanishBookPrint.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SpanishBookPrint {
    constructor() {
        this.printType = "Spanish";
    }
    print() {
        return "Spanish book Printed";
    }
}
exports.SpanishBookPrint = SpanishBookPrint;


/***/ }),

/***/ "./src/helloWorld/index.ts":
/*!*********************************!*\
  !*** ./src/helloWorld/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// content of src/ingest/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Printer_1 = __webpack_require__(/*! ./implections/Printer */ "./src/helloWorld/implections/Printer.ts");
/**
 * Lambda Function handler that takes one SNS message at a time and add loyalty points to a customer
 * While SNS does send records in an Array it only has one event
 * That means we're safe to only select the first one (event.records[0])
 *
 * @param {any} event
 * @param {Context} context
 * @returns {Promise<Result>}
 */
async function handler(event, context) {
    let message = "debugging...watch mode 3";
    console.log(message);
    let printer = new Printer_1.Printer().getPrinter(event.type);
    let text = printer.print();
    return {
        message: text,
    };
}
exports.handler = handler;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map