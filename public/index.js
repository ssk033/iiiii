const readline = require("readline");

function vowelCount(str) {
  let a=0,e=0,i=0,o=0,u=0;
  str = str.toLowerCase();

  for (let ch of str) {
    if (ch === 'a') a++;
    else if (ch === 'e') e++;
    else if (ch === 'i') i++;
    else if (ch === 'o') o++;
    else if (ch === 'u') u++;
  }

  console.log("a:", a);
  console.log("e:", e);
  console.log("i:", i);
  console.log("o:", o);
  console.log("u:", u);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  vowelCount(input);
  rl.close();
});