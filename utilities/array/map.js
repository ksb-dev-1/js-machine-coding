Array.prototype.myMap = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const length = this.length;
  const res = new Array(length);

  for (let i = 0; i < length; i++) {
    // map() skips empty slots (holes) — and keeps them as holes in the result
    if (!(i in this)) continue;

    res[i] = callbackFn.call(thisArg, this[i], i, this);
  }
  return res;
};
