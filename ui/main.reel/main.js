/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    noteItem: {
        value: null
    },
    templateDidLoad: {
        value: function (firstTime) {
            this.templateObjects.select.addRangeAtPathChangeListener("values", this, "handleValuesRangeChange");
            this.templateObjects.radioButtonController.addRangeAtPathChangeListener("_radioButtons.map{checked}", this, "handleRadioButtonChange");
            this.templateObjects.condition.condition = true;
            this.templateObjects.textField5.delegate = this;
            this.templateObjects.textField6.delegate = this;
            this.templateObjects.textField7.delegate = this;
            this.templateObjects.textField8.delegate = this;
            this.templateObjects.textField9.delegate = this;
            //e.stopImmediatePropagation();
        }
    },
    
    tf5RealValue: { value: null },
    backgroundCheck: {
        set: function (value) {
            if (this.templateObjects.textField3) {
                if (this.templateObjects.textField3.value == "Other" )
                { 
                    this.element.classList.remove("whiteStyle");
                    this.element.classList.add("grayStyle");
                } else {
                    this.element.classList.remove("grayStyle");
                    this.element.classList.add("whiteStyle")
                }
            }
        },
        get: function () {
            if (this.templateObjects.textField3) {
                if (this.templateObjects.textField3.value == "Other" )
                { 
                    this.element.classList.remove("whiteStyle");
                    this.element.classList.add("grayStyle");
                } else {
                    this.element.classList.remove("grayStyle");
                    this.element.classList.add("whiteStyle")
                }
            }
            return ""
        }
    },
    didChange: {
        value: function (event) {
            var latestChar = event.value.substring(event.value.length-1,event.value.length);
            if (event.identifier == "textField5" || event.identifier == "textField6" || event.identifier == "textField7" || event.identifier == "textField8" || event.identifier == "textField9") {
                switch (latestChar) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "0":
                        break;
                    case "-":
                    case "/":
                        event.value = event.value.substring(0, event.value.length-1);
                        break;
                    default:
                        if (event.value.length == 1) {
                            event.value = "";
                        } else {
                            event.value = event.value.substring(0, event.value.length-1);
                        }
                        break;
                }
            }
            
            if (event.identifier == "textField5") {
                if (event.value.length == 3 || event.value.length == 6) {
                    if (latestChar!="-") {
                        event.value += "-";
                    }
                } else if (event.value.length > 11){
                    event.value = event.value.substring(0,11);
                } else if (event.value.length <11) {
                    event.classList.add('validation-error');
                }
                if (event.value.length == 11 || event.value.length == 0) {
                    event.classList.remove('validation-error');
                }
            } else if (event.identifier == "textField6") {
                if (event.value.length == 3 || event.value.length == 7) {
                    if (latestChar!="-") {
                        event.value += "-";
                    }
                } else if (event.value.length > 12){
                    event.value = event.value.substring(0,12);
                } else if (event.value.length <12) {
                    event.classList.add('validation-error');
                }
                if (event.value.length == 12 || event.value.length == 0) {
                    event.classList.remove('validation-error');
                }
            } else if (event.identifier == "textField7") {
                if (event.value.length == 4 || event.value.length == 7) {
                    if (latestChar!="-") {
                        event.value += "-";
                    }
                } else if (event.value.length > 10){
                    event.value = event.value.substring(0,10);
                } else if (event.value.length <10) {
                    event.classList.add('validation-error');
                }
                if (event.value.length == 10 || event.value.length == 0) {
                    event.classList.remove('validation-error');
                }
            } else if (event.identifier == "textField8") {
                if (event.value.length == 2) {
                    if (latestChar!="/") {
                        event.value += "/";
                    }
                } else if (event.value.length > 5){
                    event.value = event.value.substring(0,5);
                } else if (event.value.length <5) {
                    event.classList.add('validation-error');
                }
                if (event.value.length == 5 || event.value.length == 0) {
                    event.classList.remove('validation-error');
                }
            } else if (event.identifier == "textField9") {
                if (event.value.length == 1) {
                    event.value = "$" + event.value;
                }
            }
            
        }
    },
    
    enterDocument: {
        value: function (firstTime) {
            this.templateObjects.repetition.selection = ["two"]
            if (document.addEventListener) {
                var me = this;
                document.addEventListener('contextmenu', function(e) {
                    //alert("main"); //here you draw your own menu
                    var element = this.elementFromPoint(e.pageX, e.pageY);
                    e.preventDefault();
                    var overlayPosition = {};
                    overlayPosition.top = e.pageY;
                    overlayPosition.left = e.pageX;
                    me.templateObjects.overlay.position = overlayPosition;
                    me.templateObjects.overlay.show();
                }, false);
            }
        }
    },
    
    handleValuesRangeChange: {
        value: function () {
            // TODO: "value" <-> "values.one()"
            if (this.templateObjects.select.values.length > 0) {
                console.log(this.templateObjects.select.values[0]);
                for (var i=0;i<this.templateObjects.select.contentController.content.length;i++) {
                    if (this.templateObjects.select.contentController.content[i]["code"] == this.templateObjects.select.values[0]["code"]) {
                        if (this.templateObjects.select.contentController.content[i]["uuid"] != this.templateObjects.select.values[0]) {
                            this.templateObjects.select.value = this.templateObjects.select.contentController.content[i];
                        }
                    }
                        
                }
            }
            this.templateObjects.select.needsDraw = true;
        }
    },
    handleRadioButtonChange: {
        value: function () {
            // TODO: "value" <-> "values.one()"
            if (this.templateObjects.radioButtonController.selectedRadioButton != null) {
                console.log(this.templateObjects.radioButtonController.value);
                var myVar = this.templateObjects.select.values[0];
                if (typeof myVar === 'string' || myVar instanceof String) {
                    if (this.templateObjects.hasOwnProperty(myVar+"Radio")) {
                        //this.templateObjects.radioButtonController.value = this.templateObjects[myVar+"Radio"];
                    }
                }
            }
            this.templateObjects.radioButtonController.needsDraw = true;
        }
    },

    handleTextField5Action: {
        value: function (event) {
            alert();
        }
    }

});
