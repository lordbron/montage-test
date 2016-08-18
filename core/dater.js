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
            if (v) {
                var convertedDate = new Date(v);
                if (this.isValidDate) {
                    var formattedDate = "" + (convertedDate.getUTCMonth()+1) + "/" + convertedDate.getUTCDate() + "/" + convertedDate.getUTCFullYear() + "";
                    return formattedDate;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        }
    },
    revert: {
        value: function (v) {
            var newDate = new Date(v);
            if (this.isValidDate(newDate)) {
                var formattedDate = "" + newDate.getUTCFullYear() + "-" + (newDate.getUTCMonth()+1) + "-" + newDate.getUTCDate() + "";
                return formattedDate;
            } else {
                return null
            }
        }
    },
    isValidDate: {
        value: function (d) {
            if ( Object.prototype.toString.call(d) !== "[object Date]" )
                return false;
            return !isNaN(d.getTime());
        }

    }

});
