import Ember from 'ember';

/**
 * A component to represent a number that must fall between two
 * (inclusive) bounds and can be updated by a discrete step size.
 * See: http://www.w3.org/wiki/HTML/Elements/input/range

 * For example:
 *
 *
 *   {{x-range-input min=0 max=100 step=1 value=someNumber on-input="someAction"}}
 *
 * @class XRangeInputComponent
 */
export default Ember.Component.extend({
  type: "range",
  tagName: ['input'],
  classNames: ['x-range-input'],
  attributeBindings: ['min', 'max', 'step', 'type', 'name', 'list'],

  /**
   * The minimum value that this component's `value` property may
   * have.
   *
   * @property min
   * @type {Number}
   * @default 0
   */
  min: 0,

  /**
   * The maximum value (inclusive) that this component's `value` may
   * have.
   *
   * @property max
   * @type {Number}
   * @default 100
   */
  max: 100,

  /**
   * The "granularity". The value of the input will be a multiple of
   * this number.
   *
   * @property step
   * @type {Number}
   * @default 0
   */
  step: 1,

  /**
   * The current value of the input. It will lie on or between `min`
   * and `max` and will be a multiple of `step`.
   *
   * @property value
   * @type {Number}
   * @default 0
   */
  value: 0,

  /**
   * On any `input` event, take the component and the element `value` and send
   * it in an action.
   *
   * @private
   */
  input() {
    this.sendAction('on-input', this, this.get('element.value'));
  },

  /**
   * Make sure that the element.value is set as soon as the element
   * becomes available.
   *
   * @override
   */
  didInsertElement() {
    this.set('element.value', this.get('value'));
  }
});
