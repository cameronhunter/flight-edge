define(function (require) {

  "use strict";

  var defineComponent = require("flight/lib/component");

  return defineComponent(LongcatStats);

  function LongcatStats() {

    this.defaultAttrs({
      lengthStat: ".LongcatStats-length"
    });

    this.updateLengthStat = function(e, data) {
      this.select('lengthStat').text(data["longcat-length"] + "px");
    };

    this.after("initialize", function() {
      this.on(document, "longcat-is-longer", this.updateLengthStat);
    });
  }
});
