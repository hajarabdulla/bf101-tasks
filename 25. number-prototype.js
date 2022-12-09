Number.prototype.add = function (num) {
  num = this + num;
  return num;
};

Number.prototype.subtract = function (num) {
  num = this - num;
  return num;
};

Number.prototype.divide = function (num) {
  num = this / num;
  return num;
};

Number.prototype.multiply = function (num) {
  num = this * num;
  return num;
};

const res = (6).add(5).subtract(7).divide(5).multiply(3);
console.log(res);