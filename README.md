# PostCSS Parcel Import [![Build Status][ci-img]][ci]

[PostCSS] plugin to fix current @import bug in parcel-bundler.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/mendrik/postcss-parcel-import.svg
[ci]:      https://travis-ci.org/mendrik/postcss-parcel-import

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-parcel-import') ])
```

See [PostCSS] docs for examples for your environment.
