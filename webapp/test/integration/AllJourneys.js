/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/Worklist",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/Object",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/NotFound",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/Browser",
	"zjblessons/ControlTaskKhartanovich/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.ControlTaskKhartanovich.view."
	});

	sap.ui.require([
		"zjblessons/ControlTaskKhartanovich/test/integration/WorklistJourney",
		"zjblessons/ControlTaskKhartanovich/test/integration/ObjectJourney",
		"zjblessons/ControlTaskKhartanovich/test/integration/NavigationJourney",
		"zjblessons/ControlTaskKhartanovich/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});