## WARNING: This is a Work In Progress
We're currently revamping this addon. If you really need this [you can use the old (and soon to be deprecated) addon located here.](https://github.com/thefrontside/emberx-slider)

# emberx-range-input

[![Build Status](https://travis-ci.org/thefrontside/emberx-slider.svg)](https://travis-ci.org/thefrontside/emberx-range-input)

A Slider component based on the native html5 range input.

The component itself takes on a number value between two bounds, that
proceeds in discrete step values. So, for example, to indicate a
percentage of saturation in an image, where the smallest change in
saturation is 1%, you might specify your slider control like:

```handlebars
{{x-range-input min=0 max=100 step=1 value=saturationPercentage on-input="updateSaturation"}}
```

In this example we would need to implement an `updateSaturation` action that
sets the value of `saturationPercentage`. That might look something like this:


```js
actions: {
  updateSaturation(component, value) {
    this.set('saturationPercentage', value);
  }
}
```
The `on-input` sends two arguments with it. The first is the entire component
and the second is the current value of the component.


### Default Values

While `min`, `max`, and `step` can take on any numeric values, the
default use-case is optimized for representing percentages stepped by
1%. There fore the proceeding example could have been written simply
as:

```handlebars
{{x-range-input value=saturationPercentage on-input="updateSaturation"}}
```

## EmberX

emberx-range-input is part of the "missing components of ember" collectively
known as emberx:

* [emberx-select](https://github.com/thefrontside/emberx-select)
* [emberx-slider](https://github.com/thefrontside/emberx-slider)
* [emberx-file-input](https://github.com/thefrontside/emberx-file-input)

## Installation

ember install emberx-range-input

## Running Tests

* `ember test`
* `ember test --server`


## Code of Conduct
Please note that this project is released with a Contributor Code of
Conduct. By participating in this project you agree to abide by its
terms, which can be found in the `CODE_OF_CONDUCT.md` file in this
repository.
