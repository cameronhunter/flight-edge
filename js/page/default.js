define(function (require) {

  'use strict';

  var Longcat = require('component/longcat');
  var LongcatStats = require('component/longcatStats');
  var Edge = require('bower_components/flight-edge/lib/edge');

  return initialize;

  function initialize() {

    $(document).on("longcat-is-longer", function(e, data) {
      console.log(e, data);
    });

    LongcatStats.attachTo(".LongcatStats");

    Longcat.attachTo(".Longcat");

    Edge.attachTo(document, {
      top: 300,
      bottom: 300
    });

  }

});
