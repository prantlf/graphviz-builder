var HashMap = function() {
  this.items = new Map();
  for (var i = 0; i < arguments.length; i += 2) {
    var value = arguments[i + 1];
    if (typeof value !== 'undefined') {
      this.items.set(arguments[i], value);
    }
  }
};
exports.HashMap = HashMap;

HashMap.prototype.removeItem = function(in_key) {
  var tmp_previous = this.items.get(in_key);
  if (typeof tmp_previous !== 'undefined') {
    this.items.delete(in_key);
  }
  return tmp_previous;
};

HashMap.prototype.getItem = function(in_key) {
  return this.items.get(in_key);
};

HashMap.prototype.setItem = function(in_key, in_value) {
  var tmp_previous;
  if (typeof in_value !== 'undefined') {
    tmp_previous = this.items.get(in_key);
    this.items.set(in_key, in_value);
  }
  return tmp_previous;
};

HashMap.prototype.hasItem = function(in_key) {
  return this.items.has(in_key);
};

HashMap.prototype.clear = function() {
  this.items.clear();
};

Object.defineProperty(HashMap.prototype, 'length', {
  get: function() {
    return this.items.size;
  }
});
