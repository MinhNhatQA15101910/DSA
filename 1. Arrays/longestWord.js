function containsPunctuation(input) {
  const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
  return punctuationRegex.test(input);
}

function longestWord(sen) {
  const arrWords = sen.split(" ");

  let strLonger = "";

  for (let stringSen of arrWords) {
    console.log(containsPunctuation(stringSen));
    if (
      !containsPunctuation(stringSen) &&
      stringSen.length > strLonger.length
    ) {
      strLonger = stringSen;
    }
  }

  return strLonger;
}

console.log(longestWord("fun&!! time"));
