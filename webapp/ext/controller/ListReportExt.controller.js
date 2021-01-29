sap.ui.controller("cust.ca.devman.zcadevman.ext.controller.ListReportExt", {
    /**
     * Button to show statistics pressed
     * Invoke a global static actionof the BO, which returns the results
     * @param {*} oEvent
     */
    showGlobalWorktimesZC_Dev: function (oEvent) {
        var that = this;
        try {
            this.extensionAPI.invokeActions(
                "cds_zui_dev.cds_zui_dev_Entities/readStatistics", [], {}).then(
                    function (oResponse) {
                        that.showStatisticDialog(oResponse);
                    },
                    function (oError) {
                        sap.m.MessageBox.error("Unable to retrieve Statistics", {});
                    });
        }
        catch (ex) {
            sap.m.MessageBox.error(ex.message, {});

        }
    },

/**
 * Statistics has been collected, display the results of action execution
 *
 * @param {*} oActionResult
 */
showStatisticDialog: function(oActionResult) {
        var mStatistics = oActionResult[0].response.data.readStatistics;
        sap.m.MessageToast.show("Days spent with development this year: " + mStatistics.TimeSpentThisYear.toString(), { duration: 5000  });
    }
});
