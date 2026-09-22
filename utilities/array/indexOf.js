// // Array.indexOf(searchElement, fromIndex)

Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myIndexOf called on null or undefined",
    );
  }

  const length = Math.min(
    Math.max(Math.floor(Number(this.length)) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );

  let startIndex = Math.trunc(Number(fromIndex)) || 0;

  if (startIndex < 0) {
    startIndex = Math.max(length + startIndex, 0);
  }

  for (let i = startIndex; i < length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
