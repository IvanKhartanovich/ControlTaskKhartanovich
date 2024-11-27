sap.ui.define([
	"zjblessons/ControlTaskKhartanovich/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"zjblessons/ControlTaskKhartanovich/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator, MessageBox) {
	"use strict";

	return BaseController.extend("zjblessons.ControlTaskKhartanovich.controller.Worklist", {

		formatter: formatter,

		onInit: function () {
			var oViewModel,
				iOriginalBusyDelay,
				oTable = this.byId("table");

			this._aTableSearchState = [];

			// Model used to manipulate control states
			oViewModel = new JSONModel({
				worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
				shareOnJamTitle: this.getResourceBundle().getText("worklistTitle"),
				tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
				tableBusyDelay: 0
			});
			this.setModel(oViewModel, "worklistView");
		},

		_searchHandler: function (sPath, vOperator, sValue) {
			const oTable = this.getView().byId('worklistTable'),
				oFilter = !!sValue.length ? new Filter(sPath, vOperator, sValue) : [];

			oTable.getBinding('rows').filter(oFilter);
		},
		onSearch: function (oEvent) {
			const sValue = oEvent.getParameter('newValue');
			this._searchHandler('MaterialText', FilterOperator.Contains, sValue);
		},
		onShowMessage: function () {
			MessageBox.alert("Khartanovich Ivan", {
				title: "Info"
			});
		},
		onShowSelectedRow: function () {
			var oTable = this.byId("worklistTable");
			var aSelectedIndices = oTable.getSelectedIndices();
			if (aSelectedIndices.length === 0) {
				MessageBox.warning("Please, select something.");
				return;
			}
			var iSelectedIndex = aSelectedIndices[0];
			var oContext = oTable.getContextByIndex(iSelectedIndex);
			var sMaterialID = oContext.getProperty("MaterialID");
			MessageBox.information(sMaterialID);
		},
		onGoPress: function (oEvent) {
			const oTable = this.byId("worklistTable");
			const aSelectedIndices = oTable.getSelectedIndices();
			if (aSelectedIndices.length === 0) {
				MessageBox.warning("Please, select something.");
				return;
			}
			const iSelectedIndex = aSelectedIndices[0];
			var oContext = oTable.getContextByIndex(iSelectedIndex);
			var sObjectId = oContext.getProperty("MaterialID");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("object", {
				objectId: sObjectId
			});
		}
	});
}
);