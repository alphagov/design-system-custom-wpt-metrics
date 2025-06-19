# Design System WPT custom metrics

This repo contains the definitions for the [custom metrics] we use with WebPageTest to track feature usage etc across service domains.

## How WebPageTest custom metrics work
Custom metrics are provided to WebPageTest using the 'ini' file format.

Each metric is defined as a separate section, with the metric name being the section title (surrounded by square brackets) and the body of the section being JavaScript code that runs in the context of a function (and therefore must return something).

## How custom metrics are defined in this repo

So that we can test that this code does what we expect, each metric is defined in a separate file in the `metrics` folder.

Each file should export a `name` (string) and a `fn` (function).

The build process will generate a single file `custom-metrics.ini` with:

- the `name` as the section heading
- JavaScript code which returns the output of the `function` (invoked as an IIFE).

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
