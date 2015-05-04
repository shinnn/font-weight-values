'use strict';

const test = require('tape');

const spec = 'should be an equivalent of the expected value.';
const expected = [
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

test('require(\'font-weight-values\')', t => {
  t.plan(1);

  t.deepEqual(require('./'), expected, spec);
});

test('window.fontWeightValues', t => {
  t.plan(1);

  global.window = {};
  require('./' + require('./bower.json').main);
  t.deepEqual(window.fontWeightValues, expected, spec);
});
