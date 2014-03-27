define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(PageNavigation);

  function PageNavigation() {

    this.showPageNavigation = function() {
      this.$node.fadeIn();
    };

    this.hidePageNavigation = function() {
      this.$node.fadeOut();
    };

    this.after("initialize", function() {
      this.on(document, "edge-top", this.hidePageNavigation);
      this.on(document, "leaving-edge-top", this.showPageNavigation);
    });
  }
});
