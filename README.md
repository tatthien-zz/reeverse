# reeverse

A dead simple text reverse library.

> This library is created for learning Rollup purpose. It's not recommended for your projects.

## Installation

- Install via npm or yarn:

```bash
$ npm install reeverse
# install with yarn
$ yarn add reeverse
```

- Include within your HTML

```html
<script src="https://unpkg.com/reeverse@1.0.0/dist/reeverse.min.js"></script>
```

## Usage

- In Node.js application.

```js
const reverse = require('reeverse')

const text = 'Hello 12bit.vn'
const reversedText = reverse(text)

console.log(reversedText)
// nv.tib21 olleH
```

- Using for es-modules.

```js
import reverse from 'reeverse'
```

- In browsers.

```html
<script>
var text = 'Hello 12bit.vn'
var reversedText = reverse(text)

console.log(reversedText)
// nv.tib21 olleH
</script>
```
