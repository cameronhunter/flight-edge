define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(longcat);

  function longcat() {

    this.embiggen = function(e) {
      $("<div>", {"class": "Longcat-segment"}).appendTo(this.$node);
      this.broadcastHeight();
    };

    this.broadcastHeight = function() {
      this.trigger("longcat-is-longer", {"longcat-length": this.$node.height()});
    };

    this.after("initialize", function() {
      this.broadcastHeight();
      this.on(document, "edge-bottom", this.embiggen);
    });
  }
});
