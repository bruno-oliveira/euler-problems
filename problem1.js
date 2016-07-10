var countdown, num;

countdown = (function() {
  var i, results;
  results = [];
  for (num = i = 1; i <= 1000; num = ++i) {
    if (num % 3 === 0 || num % 5 === 0) {
      results.push(num);
    }
  }
  return results;
})();

var ans = 0;
for(i = 0; i < countdown.length; i++)
		ans+=countdown[i];

alert(ans);
