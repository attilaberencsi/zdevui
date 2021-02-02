sap.ui.controller("cust.ca.devman.zcadevman.ext.controller.ObjectPageExt", {


    /**
     * Bound to the post event of the FeedInput to add comments
     *
     * @param {*} oEvent
     */
    onAddCommentZC_Dev: function (oEvent) {
        var oModel = this.getView().getModel();
        var sBindingPath = this.getView().getBindingContext().getPath();
        oModel.create(sBindingPath + "/to_Comment", { CommentText: oEvent.getParameters().value }, null);
        this.getView().byId("idCommentList").getBinding("items").refresh();
    },

    beforeSaveExtension: function () {
        var fnResolve, fnReject;
        var oPromise = new Promise(function (resolve, reject) {
            fnResolve = resolve;
            fnReject = reject;
        });

        var oModel = this.getView().getModel();
        var sBindingPath = this.getView().getBindingContext().getPath();

        if (!oModel.getProperty(sBindingPath + "/ShortDescription")) {
            this.oDialog = new sap.m.Dialog({

                title: "Confirmation required",
                content: new sap.m.Text({
                    text: "No Short Description is provided"
                }),
                beginButton: new sap.m.Button({
                    text: "Continue to Save",
                    press: function () {
                        fnResolve();
                        this.oDialog.close();
                    }.bind(this)
                }),
                endButton: new sap.m.Button({
                    text: "Cancel Save",
                    press: function () {
                        fnReject();
                        this.oDialog.close();
                    }.bind(this)
                })
            }).addStyleClass("sapUiResponsivePadding--content");
            this.getView().addDependent(this.oDialog);
            this.oDialog.open();
        } else {
            fnResolve();
        }

        return oPromise;
    }

});
