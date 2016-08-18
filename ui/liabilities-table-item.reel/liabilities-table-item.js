/**
 * @module ui/liabilities-table-item.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class LiabilitiesTableItem
 * @extends Component
 */
exports.LiabilitiesTableItem = Component.specialize(/** @lends LiabilitiesTableItem# */ {
    templateDidLoad: {
        value: function (event) {
            this.templateObjects.condition.condition = false;
            this.templateObjects.typeTextField.element["placeholder"]="Type";
            this.templateObjects.accountNumberTextField.element["placeholder"]="Account Number";
            this.templateObjects.balanceTextField.element["placeholder"]="Balance";
            this.templateObjects.cityTextField.element["placeholder"]="City";
            this.templateObjects.descriptionTextField.element["placeholder"]="Description";
            this.templateObjects.ownTextField.element["placeholder"]="Ownership";
            this.templateObjects.paymentTextField.element["placeholder"]="Payment";
            this.templateObjects.stateTextField.element["placeholder"]="State";
            this.templateObjects.streetAddress1TextField.element["placeholder"]="Address1";
            this.templateObjects.streetAddress2TextField.element["placeholder"]="Address1";
            this.templateObjects.typeTextField.element["placeholder"]="Type";
            this.templateObjects.zipTextField.element["placeholder"]="Zip";
            if (document.addEventListener) {
                document.addEventListener('contextmenu', function(e) {
                    //alert("liabilities-table-item"); //here you draw your own menu
                    e.preventDefault();
                }, false);
            }
        }
    },

    handleDetailsButtonAction: {
        value: function (event) {
            this.templateObjects.condition.condition = !this.templateObjects.condition.condition;
        }
    }

});
