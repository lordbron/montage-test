/**
 * @module core/radio-buttons
 */
var Montage = require("montage/core/core").Montage;
    Converter = require("montage/core/converter/converter").Converter,

/**
 * @class RadioButtons
 * @extends Montage
 */
exports.RadioButtons =  Montage.create(Converter, {
    constructor: {
        value: function RadioButtons() {
            this.super();
        },
    },
    convert: {
        value: function (v) {
            console.log("convert:"+v);
            return v;
        }
    },
    revert: {
        value: function (v) {
            console.log("revert:"+v);
            return v;
        }
    }
});
