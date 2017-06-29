var voweler = function (str) {
  var strArr = str.toLowerCase().split('');
  var obj = {};
  strArr.forEach(function(ch) {
    if ('aeiou'.indexOf(ch) !== -1) {
      obj[ch] = (obj[ch] || 0 ) + 1;
    }
  });
  return obj;
}
console.log(voweler("This is a test"));
// Object {i: 2, a: 1, e: 1}