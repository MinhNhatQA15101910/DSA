function reverse(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;

  var result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
    console.log(result);
  }
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse3("Hi My name is Andrei"));
