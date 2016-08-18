/**
 * @module ui/liabilities-table.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class LiabilitiesTable
 * @extends Component
 */
exports.LiabilitiesTable = Component.specialize(/** @lends LiabilitiesTable# */ {
    templateDidLoad: {
        value: function (event) {
            if (document.addEventListener) {
                document.addEventListener('contextmenu', function(e) {
                    //alert("liabilities-table"); //here you draw your own menu
                    e.preventDefault();
                }, false);
            }
        }
    },

    handleTypeLabelAction: {
        value: function (event) {
            alert();
        }
    }

});
