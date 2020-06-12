var Suite = require('benchmark').Suite;
var HashObject = require('./hashobject').HashObject;
var HashMap = require('./hashmap').HashMap;

function test(hash) {
  hash.setItem('color', 'grey');
  hash.setItem('levels', 2);
  hash.setItem('bgcolor', 'white');
  hash.setItem('style', 'filled');
  hash.setItem('width', 1);
  hash.hasItem('levels');
  hash.getItem('width');
  hash.removeItem('levels');
  hash.removeItem('width');
  hash.hasItem('levels');
  hash.getItem('width');
  hash.clear('width');
}

function object() {
  test(new HashObject());
}

function map() {
  test(new HashMap());
}

/* eslint-disable no-console */
var suite = new Suite();
console.log('attributes:');
suite
  .add('object', object)
  .add('map', map)
  .on('cycle', function(event) {
    console.log(' ', String(event.target));
  })
  .on('complete', function() {
    console.log('  fastest is', suite.filter('fastest').map('name')[0]); 
  })
  .run();
