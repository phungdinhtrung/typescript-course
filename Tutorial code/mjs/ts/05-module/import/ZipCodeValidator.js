"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainValidator = exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5;
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
