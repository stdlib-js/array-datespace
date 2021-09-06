<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Datespace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Generate an array of linearly spaced [dates][mdn-date-object].

<section class="installation">

## Installation

```bash
npm install @stdlib/array-datespace
```

</section>

<section class="usage">

## Usage

```javascript
var datespace = require( '@stdlib/array-datespace' );
```

#### datespace( start, stop\[, length]\[, opts] )

Generates an `array` of linearly spaced [`Date`][mdn-date-object] objects. If a `length` is not provided, the default output `array` length is `100`.

```javascript
var end = '2014-12-02T07:00:54.973Z';
var start = new Date( end ) - 60000;

var arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/
```

The `start` and `stop` times may be either [`Date`][mdn-date-object] objects, date strings, Unix timestamps, or JavaScript timestamps.

```javascript
// JavaScript timestamps:
var end = 1417503654973;
var start = new Date( end - 60000 );

var arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/

// Unix timestamps:
end = 1417503655;
start = end - 60;

arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/
```

The output `array` is guaranteed to include the `start` and `end` times. Beware, however, that values between the `start` and `end` are subject to rounding errors. For example,

```javascript
var arr = datespace( 1417503655000, 1417503655001, 3 );
// returns [ 1417503655000, 1417503655000, 1417503655001 ]
```

where sub-millisecond values are truncated by the [`Date`][mdn-date-object] constructor. Duplicate values should only be a problem when the interval separating consecutive times is less than a millisecond. As the interval separating consecutive dates goes to infinity, the quantization noise introduced by millisecond resolution is negligible.

By default, fractional timestamps are floored. To specify that timestamps always be rounded up or to the nearest millisecond **when converted to [`Date`][mdn-date-object] objects**, set the `round` option (default: `floor`).

```javascript
// Equivalent of Math.ceil():
var arr = datespace( 1417503655000, 1417503655001, 3, {
    'round': 'ceil'
});
// returns [ 1417503655000, 1417503655001, 1417503655001 ]

// Equivalent of Math.round():
arr = datespace( 1417503655000, 1417503655001, 3, {
    'round': 'round'
});
// returns [ 1417503655000, 1417503655001, 1417503655001 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var datespace = require( '@stdlib/array-datespace' );
var start;
var arr;
var end;

end = '2014-12-02T07:00:54.973Z';
start = new Date( end ) - 100000;

// Default behavior:
arr = datespace( start, end );
console.log( arr.join( '\n' ) );

// Specify length:
arr = datespace( start, end, 10 );
console.log( arr.join( '\n' ) );

arr = datespace( start, end, 11 );
console.log( arr.join( '\n' ) );

// Create an array with decremented values:
arr = datespace( end, start, 11 );
console.log( arr.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/array/linspace`][@stdlib/array/linspace]: generate a linearly spaced numeric array.
-   [`@stdlib/array/logspace`][@stdlib/array/logspace]: generate a logarithmically spaced numeric array.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-datespace.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-datespace

[test-image]: https://github.com/stdlib-js/array-datespace/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-datespace/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-datespace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-datespace?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-datespace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-datespace/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-datespace/main/LICENSE

[mdn-date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/array/linspace]: https://github.com/stdlib-js/array-linspace

[@stdlib/array/logspace]: https://github.com/stdlib-js/array-logspace

<!-- </related-links> -->

</section>

<!-- /.links -->
