define(function (require) {

  'use strict';

  var utils = require('flight/lib/utils');
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
      var left = this.$win.scrollLeft();
      var top = this.$win.scrollTop();

      this.check(left, 'left');
      this.check(left + this.viewport.width, 'right');
      this.check(top, 'top');
      this.check(top + this.viewport.height, 'bottom');
    };

    this.check = function(value, edge) {
      var trigger = this[edge + 'Trigger'];
      if (trigger == null || !between(value, trigger)) {
        if (this[edge + 'Triggered']) {
          this.trigger('leaving-edge-' + edge);
        }
        this[edge + 'Triggered'] = false;
        return;
      }

      if (!this[edge + 'Triggered']) {
        this.trigger('edge-' + edge, {value: value});
        this[edge + 'Triggered'] = true;
        this.cacheValues();
      }
    };

    this.setValue = function(edge, value) {
      if (this.attr[edge] != null) {
        this[edge + 'Trigger'] = value;
      }
    };

    this.cacheValues = function() {
      this.page = {width: this.$doc.width(), height: this.$doc.height()};
      this.viewport = {width: this.$win.width(), height: this.$win.height()};

      this.setValue('left', {start: 0, end: this.attr.left});
      this.setValue('right', {start: this.page.width - this.attr.right, end: this.page.width});
      this.setValue('top', {start: 0, end: this.attr.top});
      this.setValue('bottom', {start: this.page.height - this.attr.bottom, end: this.page.height});
    };

    this.after('initialize', function() {
      this.$win = $(window);
      this.$doc = $(document);

      this.cacheValues();

      this.on(window, 'resize', this.cacheValues);
      this.on(window, 'scroll', this.scroll);
    });
  }

  function between(value, bounds) {
    return value >= bounds.start && value <= bounds.end;
  }
});
