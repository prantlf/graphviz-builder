var Hash = function() {
  this.items = new Map();
  for (var i = 0, l = arguments.length; i < l; i += 2) {
    var value = arguments[i + 1];
    if (value !== undefined) {
      this.items.set(arguments[i], value);
    }
  }
};
exports.Hash = Hash;

Hash.prototype.removeItem = function(in_key) {
  var tmp_previous = this.items.get(in_key);
  if (tmp_previous !== undefined) {
    this.items.delete(in_key);
  }
  return tmp_previous;
};

Hash.prototype.getItem = function(in_key) {
  return this.items.get(in_key);
};

Hash.prototype.setItem = function(in_key, in_value) {
  var tmp_previous;
  if (in_value !== undefined) {
    tmp_previous = this.items.get(in_key);
    this.items.set(in_key, in_value);
  }
  return tmp_previous;
};

Hash.prototype.hasItem = function(in_key) {
  return this.items.has(in_key);
};

Hash.prototype.clear = function() {
  this.items.clear();
};

Object.defineProperty(Hash.prototype, 'length', {
  get: function() {
    return this.items.size;
  }
});
