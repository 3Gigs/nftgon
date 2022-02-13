#! /usr/bin/env node

const { NFTGon } = require("../");

const argv = process.argv.slice(1);

const args = {
    inputUrl: "",
    outputPath: "",
}

for(let i = 0; i < argv.length; i++) {
    switch(argv[i]) {
        case "-i":
        case "--input":
            args.inputUrl = argv[i + 1];
            i += 1;
            break;
        case "-o":
        case "--output":
            args.outputPath = argv[i + 1];
            i += 1;
        default:
            break;
    }
}

console.log(`Input: ${args.inputUrl}`);
console.log(`Output: ${args.outputPath}`);