sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {

  return Controller.extend("com.sfc.hellosfc.controller.View2", {

    onInit: function() {
      alert("onInit function called");
    },
    
    onBeforeRendering: function() {
      alert("onBeforeRendering function called");
    },
    
    onAfterRendering: function() {
      alert("onAfterRendering function called");
    },
    
    onExit: function() {

		  console.log("onExit() of controller called...");
		  alert("onExit function called");
	  },
    
    onPress: function(Event) {
      this.getView().destroy();
    }

  });
});