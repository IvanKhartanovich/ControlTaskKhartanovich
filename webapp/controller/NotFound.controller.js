sap.ui.define([
		"zjblessons/ControlTaskKhartanovich/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.ControlTaskKhartanovich.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);