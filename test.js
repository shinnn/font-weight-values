/*!
 * font-weight-values | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/font-weight-values
*/
'use strict';

var test = require('tape');

var spec = 'should be an equivalent of the expected value.';
var expected = [
  'normal',
  'bold',
  'bolder',
  'lighter',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
];

test('require(\'font-weight-values\')', function(t) {
  t.plan(1);

  t.deepEqual(require('./'), expected, spec);
});

test('window.fontWeightValues', function(t) {
  t.plan(1);

  global.window = {};
  require(require('./bower.json').main);
  t.deepEqual(window.fontWeightValues, expected, spec);
});
