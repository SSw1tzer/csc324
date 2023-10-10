const fs = require("fs");
const path = require('path');
let targetFile = path.resolve(process.cwd(), './adventCode2022_01/input.txt');
//C:\Programs\GIT\adventCode2022_01
let input = fs.readFileSync(targetFile);
const txt = input.toString();
console.log(txt);