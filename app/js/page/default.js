define(function (require) {

  'use strict';

  var Longcat = require('component/longcat');
  var Edge = require('bower_components/flight-edge/lib/edge');
  var LengthDisplay = require('component/longcatLengthDisplay');

  return initialize;

  function initialize() {

    LengthDisplay.attachTo(".Report-number");

    Longcat.attachTo(".Longcat");

    Edge.attachTo(document, {
      top: 300,
      bottom: 300
    });

  }

});
