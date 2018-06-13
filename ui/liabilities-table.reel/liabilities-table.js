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
            this.templateObjects.liabilitiesTable.contentController.selection = [{
                "AccountNumber": "446542491799",
                "Address": null,
                "Balance": 280,
                "Consolidate": null,
                "Description": null,
                "ExcludeFlag": null,
                "Id": null,
                "JointIndicator": null,
                "Payment": 15,
                "Type": "CC"
            },
                                                                                 {
                                                                                     "AccountNumber": "522278873737",
                                                                                     "Address": null,
                                                                                     "Balance": 592,
                                                                                     "Consolidate": null,
                                                                                     "Description": null,
                                                                                     "ExcludeFlag": null,
                                                                                     "Id": null,
                                                                                     "JointIndicator": null,
                                                                                     "Payment": 29,
                                                                                     "Type": "CC"
                                                                                 }]
        }
    },
    handleTypeLabelAction: {
        value: function (event) {
            alert();
        }
    }

});
