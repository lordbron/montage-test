/**
 * @module core/drop-down
 */
var Montage = require("montage/core/core").Montage;
    Converter = require("montage/core/converter/converter").Converter,

/**
 * @class DropDown
 * @extends Montage
 */
exports.DropDown = Montage.create(Converter, {
    constructor: {
        value: function DropDown() {
            this.super();
        }
    },
    convert: {
        value: function (v) {
            var returnObject = {};
            returnObject["label"] = v;
            returnObject["code"] = v;
            for (var i=0;i<this.content.length;i++) {
                if (this.content[i]["code"] == v) {
                        returnObject = {};
                        returnObject = this.content[i];
                }

            }
            return returnObject;
        }
    },
    revert: {
        value: function (v) {
            return v["code"];
        }
    },
    content: {
        value: null
    }
});
