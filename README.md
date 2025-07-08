# Design System WPT custom metrics

This repo contains the definitions for the [custom metrics] we use with WebPageTest to track feature usage etc across service domains.

## How WebPageTest custom metrics work

Custom metrics are provided to WebPageTest using the 'ini' file format.

Each metric is defined as a separate section, with the metric name being the section title (surrounded by square brackets) and the body of the section being JavaScript code that runs in the context of a function (and therefore must return something).

## How custom metrics are defined in this repo

Each metric should be defined in a separate file in the `metrics` folder which should export a single function.

The build process will generate a single file `custom-metrics.ini` with, for each metric:

- the filename (minus the file extension) as the section name
- the `function`, invoked as an IIFE and returned

For example, given 2 metric files with the following content:

```js
// metrics/coin-toss.js
module.exports = function () {
  return Math.random() < 0.5
}

// metrics/random.js
module.exports = function () {
  return Math.random()
}
```

The generated `custom-metrics.ini` file would look like this:

```ini
[coin-toss]
return (function () {
  return Math.random() < 0.5
})()

[random]
return (function () {
  return Math.random()
})()
```

**Not all metrics have been converted yet. These additional metrics are concatenated into the output as part of the build process.**

## Usage

To generate the current custom metrics:

```
npm run build
```

## Tests

Each metric should have a corresponding test in the `tests/` folder.

The tests use the `jsdom` environment to simulate a browser, as that's the context that the metric javascript will run in.

[custom metrics]: https://docs.webpagetest.org/custom-metrics/

## Licence

[MIT License](LICENCE)
