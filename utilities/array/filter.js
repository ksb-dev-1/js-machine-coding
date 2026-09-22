Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const length = this.length;
  const res = [];

  for (let i = 0; i < length; i++) {
    // filter() skips empty slots (holes) — the result is always dense
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
