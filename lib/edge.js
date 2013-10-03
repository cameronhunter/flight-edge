define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(edge);

  function edge() {
    this.defaultAttrs({
      left: undefined,
      right: undefined,
      top: undefined,
      bottom: undefined
    });

    this.scroll = function() {
      var x = this.viewport.width + this.$win.scrollLeft();
      if (between(x, this.rightTrigger)) this.trigger('edge-right');
      if (between(x, this.leftTrigger)) this.trigger('edge-left');

      var y = this.viewport.height + this.$win.scrollTop();
      if (between(y, this.topTrigger)) this.trigger('edge-top');
      if (between(y, this.bottomTrigger)) this.trigger('edge-bottom');
    };

    this.cacheSizes = function() {
      this.page = {width: this.$doc.width(), height: this.$doc.height()};
      this.viewport = {width: this.$win.width(), height: this.$win.height()};

      this.leftTrigger = isNaN(this.attr.left) ? undefined : {start: 0, end: this.attr.left};
      this.rightTrigger = isNaN(this.attr.right) ? undefined : {start: this.page.width - this.attr.right, end: this.page.width};

      this.topTrigger = isNaN(this.attr.top) ? undefined : {start: 0, end: this.attr.top};
      this.bottomTrigger = isNaN(this.attr.bottom) ? undefined : {start: this.page.height - this.attr.bottom, end: this.page.height};
    };

    this.after('initialize', function() {
      this.$win = $(window);
      this.$doc = $(document);

      this.cacheSizes();

      this.on(window, 'resize', this.cacheSizes);
      this.on(window, 'scroll', this.scroll);
    });
  }

  function between(value, bounds) {
    return value >= bounds.start && value <= bounds.end;
  }
});
