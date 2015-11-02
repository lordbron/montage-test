/**
 * @module core/dater
 */
var Montage = require("montage/core/core").Montage;
    Converter = require("montage/core/converter/converter").Converter,
        
 /**
 * @class Dater
 * @extends Montage
 */
exports.Dater = Montage.create(Converter, {
    constructor: {
        value: function Dater() {
            this.super();
        }
    },
    convert: {
        value: function (v) {
            return "2" + v + "2";
        }
    },
    /**
     * @function
     * @param {Date} v Value.
     */
    revert: {
        value: function (v) {
            var m = v.substr(1);
            var n = m.substr(0,m.length-1);
            return n
            
        }
    }

});
