#! /usr/bin/env node

const { NFTGon } = require("../");
const { createWriteStream } = require("fs")

const argv = process.argv.slice(2);

const args = {
    inputUrls: "",
    outputPath: "",
    options: "",
}

for(let i = 0; i < argv.length; i++) {
    switch(argv[i]) {
        case "-O":
        case "--options":
            args.options = argv[i + 1];
            i++;
            break;
        case "-o":
        case "--output":
            args.outputPath = argv[i + 1];
            i++;
            break;
        // Every arg without an option prefix is appended to input
        default:
            args.inputUrls += argv[i] + " ";
            break;
    }
}

(async () => {
    const victims = args.inputUrls.split(" ");
    victims.pop();
    const out = createWriteStream(args.outputPath.length > 0 
        ? args.outputPath : (`${__dirname}/a.png`));

    for(input of victims) {
        const cv = await NFTGon.nftify(input);
        if(args.options.length > 0) {
            const opts = JSON.parse(`{${args.options}}`);
            const png = cv.createPNGStream(opts);
            png.pipe(out);
        }
        else {
            const png = cv.createPNGStream();
            png.pipe(out);
        }
    }
})();