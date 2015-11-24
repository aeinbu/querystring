# querystring
A small Javascript utility to create and parse querystrings

## How to use
### Without a module loader
```html
<script src="querystring.js"></script>
<script>
  // ...
  var obj = querystring.parse(str);
  // or
  var str = querystring.format(obj);
  // ...
</script>
```

### With AMD
```javascript
require(["querystring"], function(querystring){
  // ...
  var obj = querystring.parse(str);
  // or
  var str = querystring.format(obj);
  // ...
});
```

### With CommonJS
```javascript
var clone = require("querystring");
// ...
var obj = querystring.parse(str);
// or
var str = querystring.format(obj);
// ...
```
