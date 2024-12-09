function firstRecurringCharacter(input) {
  if (!input || !input.length) return undefined;

  let set = new Set();
  for (let i = 0; i < input.length; i++) {
    if (set.has(input[i])) return input[i];
    set.add(input[i]);
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
