var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

var file = fs.readFileSync("iTerm2-colors.zip");
console.log(file);

console.timeEnd("leitura");
console.log("Ja li", Date.now());