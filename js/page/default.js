define(function (require) {

  'use strict';

  var Longcat = require('component/Longcat');
  var LongcatStats = require('component/LongcatStats');
  var PageNavigation = require('component/PageNavigation');
  var Edge = require('bower_components/flight-edge/lib/edge');

  return initialize;

  function initialize() {

    LongcatStats.attachTo(".LongcatStats");

    Longcat.attachTo(".Longcat");

    Edge.attachTo(document, {
      top: 300,
      bottom: 300
    });

    PageNavigation.attachTo(".PageNavigation");
  }

});
