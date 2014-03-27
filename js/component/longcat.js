define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(longcat);

  function longcat() {

    var colors = ["#f00", "#0f0", "#00f"];

    this.embiggen = function(e) {
      $("<div class='Longcat-segment'></div>").appendTo(this.$node);
      this.trigger("longcat-is-longer");
    };

    this.after('initialize', function() {
      this.on(document, 'edge-bottom', this.embiggen);
    });
  }
});
