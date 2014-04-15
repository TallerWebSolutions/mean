var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("Leitura");

fs.readFile("iTerm2-colors.zip", function (err, data) {
	console.log(data);
});

console.timeEnd("Leitura");
console.log("Ja li", Date.now());