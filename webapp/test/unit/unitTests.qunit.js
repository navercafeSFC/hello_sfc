/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsfc./hello_sfc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
