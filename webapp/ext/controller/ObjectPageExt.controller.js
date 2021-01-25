sap.ui.controller("cust.ca.devman.zcadevman.ext.controller.ObjectPageExt", {
    

    /**
     * Bound to the post event of the FeedInput to add comments
     *
     * @param {*} oEvent
     */
    onAddCommentZC_Dev : function(oEvent) {         
        var oExtAPI = this.extensionAPI;
        var oTxCtrl = oExtAPI.getTransactionController();
        var oModel = this.getView().getModel();
        var sBindingPath = this.getView().getBindingContext().getPath();	       
        oModel.create( sBindingPath + "/to_Comment" , { CommentText: oEvent.getParameters().value  } ,null );        
        this.getView().byId("idCommentList").getBinding("items").refresh();
    }
});
