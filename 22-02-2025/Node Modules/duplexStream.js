const fs=require("fs");
fs.createReadStream("demo.txt").pipe(fs.createWriteStream("clonedDemo.txt"));
console.log("Data cloned succesfully")