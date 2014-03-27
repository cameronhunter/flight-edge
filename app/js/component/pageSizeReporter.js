define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(pageSizeReporter);

  function pageSizeReporter() {

    this.report = function(e) {
      this.$node.text(this.$doc.height() + "px");
    };

    this.after('initialize', function() {
      this.$doc = $(document);
      this.on(document, 'longcat-is-longer', this.report);
      this.report();
    });
  }
});
