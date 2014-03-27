define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(longcatStats);

  function longcatStats() {

    this.defaultAttrs({
      lengthSelector: ".LongcatStats-length"
    });

    this.updateLength = function(e, data) {
      this.select('lengthSelector').text(data["longcat-length"] + "px");
    };

    this.after("initialize", function() {
      this.on(document, "longcat-is-longer", this.updateLength);
    });
  }
});
