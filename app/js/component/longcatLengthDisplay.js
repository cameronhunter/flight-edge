define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(longcatLengthDisplay);

  function longcatLengthDisplay() {

    this.report = function(e, data) {
      this.$node.text(data["longcat-length"] + "px");
    };

    this.after("initialize", function() {
      this.on(document, "longcat-is-longer", this.report);
    });
  }
});
