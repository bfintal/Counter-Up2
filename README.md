# Counter-Up2
Counter-Up is a lightweight module that counts up to a targeted number when the number becomes visible.

An improvement to https://github.com/bfintal/Counter-Up

**Install**
```bash
npm install --save counterup2
```

**HTML**
```html
<div class="counter">1,123,456 downloads</div>
```

**JS**
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