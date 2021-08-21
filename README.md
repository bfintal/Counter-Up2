# Counter-Up2

[![Build Status](https://travis-ci.org/bfintal/Counter-Up2.svg?branch=master)](https://travis-ci.org/bfintal/Counter-Up2)

![Counter-Up2 demo gif](https://bfintal.github.io/Counter-Up2/sample.gif)

Example Pen: https://codepen.io/bfintal/pen/zYzOGpZ

Counter-Up is a lightweight (only 1.3kb gzipped) module with zero dependencies that counts up to a targeted number when the number becomes visible.

## What Can You Count Up?

* Floats: `1.234`
* Integers: `1234`
* With commas: `1,234.56`
* Commas and dots: `12.345,67`
* With non-numeric characters: `$1,234.56`
* Multiple countable values: `604,800 seconds in 10,080 minutes in 168 hours in 7 days`

## Usage
### Usage as Module

**Install**
```bash
npm install --save counterup2
```

**HTML**
```html
<div class="counter">1,123,456 downloads</div>
```

**JS**

Importing as a module will import the modern JavaScript code.

```js
import counterUp from 'counterup2'

const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( el, {
    duration: 1000,
    delay: 16,
} )
```

If you want to stop the counter immediately:

```js
// Stop counting. This brings back the original value.
counterUp( el, { action: 'stop' } )
```

### Usage in Browser

Example Pen: https://codepen.io/bfintal/pen/zYzOGpZ

**HTML**

```html
<script src="https://unpkg.com/counterup2@2.0.2/dist/index.js">	</script>

<div class="counter">1,123,456.78</div>
```

**JS**
```js
const { counterUp } = window.counterUp

const el = document.querySelector( '.counter' )

// Start counting, typically you need to call this when the 
// element becomes visible, or whenever you like.
counterUp( el, {
    duration: 5000,
    delay: 16,
} )
```

**CDN**
* https://unpkg.com/counterup2@2.0.2/dist/index.js

## Triggering the Counter

It is up to you to perform the triggering on when to start the count up. Here are some common ways on how to do it:
### Trigger when the element becomes visible with Intersection Observer

Example Pen: https://codepen.io/bfintal/pen/zYzOGpZ

```js
const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )
```

### Trigger when the element becomes visible with Waypoints

The counting is performed when `counterUp` is called. To make the counting start when the element becomes visible, use a visibility library like [Waypoints](https://www.npmjs.com/package/waypoints)

For example:

```js
// On DOM ready.
require( 'waypoints/lib/noframework.waypoints.js' )
const el = document.querySelector( '.counter' )
new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
```

### Footnotes
An improvement to https://github.com/bfintal/Counter-Up