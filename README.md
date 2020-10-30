
<p align="center">
  <h1 align="center">Tailwind Pimento</h1>
</p>

A super tiny tailwind plugin that enables the use of the Pimento color scheme.


## Installation

`npm i tailwind-pimento`

## Usage


In your tailwind.config.js:

```js
  plugins: [
    require('tailwind-pimento'),
  ],
```

You now have access to the Pimento theme any where you would use normal Tailwind colors.

```html
<div class="bg-pimento-blue0">
    <p class="text-pimento-fg">Hello, this is some text</p>
</div>
```
