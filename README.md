# Longcat is long

This is a [Flight JS](https://github.com/flightjs/flight) app that makes use of the [flight-edge](https://github.com/cameronhunter/flight-edge) component.

The flight-edge component triggers an event when the scroll position is within 300px of the top or bottom of the page. When the `edge-bottom` event is triggered, the `Longcat` component adds another 513px segment to its body, creating an infinite scroll effect.

There are two other components, `LongcatStats` reports the length of the longcat as it grows, and `PageNavigation` shows and hides a "Back to top" link when particular edge events are triggered.
