define(function (require) {

  'use strict';

  var Longcat = require('component/longcat');
  var Edge = require('bower_components/flight-edge/lib/edge');
  var Reporter = require('component/pageSizeReporter');

  return initialize;

  function initialize() {

    Reporter.attachTo(".Report-number");

    Longcat.attachTo(".Longcat");

    Edge.attachTo(document, {
      top: 300,
      bottom: 300
    });

  }

});
