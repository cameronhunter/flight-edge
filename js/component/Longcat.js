define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(Longcat);

  function Longcat() {

    this.embiggen = function(e) {
      $("<div>", {"class": "Longcat-segment"}).appendTo(this.$node);
      this.broadcastLongcatLength();
    };

    this.broadcastLongcatLength = function() {
      this.trigger("longcat-is-longer", {"longcat-length": $(document).height()});
    };

    this.after("initialize", function() {
      this.broadcastLongcatLength();
      this.on(document, "edge-bottom", this.embiggen);
    });
  }
});
