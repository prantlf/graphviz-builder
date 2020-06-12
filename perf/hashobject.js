var HashObject = function() {
  this.length = 0;
  this.items = [];
  for (var i = 0; i < arguments.length; i += 2) {
    if (typeof arguments[i + 1] !== 'undefined') {
      this.items[arguments[i]] = arguments[i + 1];
      this.length++;
    }
  }
};
exports.HashObject = HashObject;

HashObject.prototype.removeItem = function(in_key) {
  var tmp_previous;
  if (typeof this.items[in_key] !== 'undefined') {
    this.length--;
    tmp_previous = this.items[in_key];
    delete this.items[in_key];
  }

  return tmp_previous;
};

HashObject.prototype.getItem = function(in_key) {
  return this.items[in_key];
};

HashObject.prototype.setItem = function(in_key, in_value) {
  var tmp_previous;
  if (typeof in_value !== 'undefined') {
    if (typeof this.items[in_key] === 'undefined') {
      this.length++;
    } else {
      tmp_previous = this.items[in_key];
    }

    this.items[in_key] = in_value;
  }

  return tmp_previous;
};

HashObject.prototype.hasItem = function(in_key) {
  return typeof this.items[in_key] !== 'undefined';
};

HashObject.prototype.clear = function() {
  for (var i in this.items) {
    delete this.items[i];
  }

  this.length = 0;
};
