sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller, MessageBox} Controller
	 */
	function (Controller, MessageBox) {
		"use strict";

		return Controller.extend("com.sfc.hellosfc.controller.View1", {
			onInit: function () {

            },
            
            onAlertHelloButtonPress : function (){
                MessageBox.alert("Hello SFC ( SAP Fiori Cafe )");
            }
		});
	});
