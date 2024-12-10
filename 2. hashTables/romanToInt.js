var romanToInt = function (s) {
  let result = 0;
  let previousValue = 0;
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];
    if (currentValue < previousValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    previousValue = currentValue;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
