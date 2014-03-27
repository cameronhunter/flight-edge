# flight-edge

A [Flight](https://github.com/flightjs/flight) component that triggers an event
when entering or leaving a screen edge.

See it action, [try the longcat demo](http://cameronhunter.github.io/flight-edge/).

## Installation

```bash
bower install --save flight-edge
```

## Example

```javascript
define(['flight-edge'], function(Edge) {

  // Listen for scrolling into a zone
  $(document).on("edge-top edge-bottom", function(e, data) {
    console.log(e, data);
  });

  // Listen for scrolling out of a zone
  $(document).on("leaving-edge-top leaving-edge-bottom", function(e, data) {
    console.log(e, data);
  });

  // Setup the zones
  Edge.attachTo(document, {
    top: 300,
    bottom: 300
  });

});
```

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
