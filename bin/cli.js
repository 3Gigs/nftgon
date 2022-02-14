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
    if(victims.length > 0) {
        if(args.outputPath.length === 0) {
            args.outputPath = `${process.cwd()}/${args.inputUrls
                .match(/[^\/]+$/)[0]
                .substring(0, args.inputUrls.lastIndexOf("."))}_nft.png`;
        }

        for(input of victims) {
            try {
                const cv = await NFTGon.nftify(input);
                const out = createWriteStream(args.outputPath);
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
            catch(e) {
                if(e.code == "ENOENT") {
                    kill("Invalid input file(s)!");
                }
                else {
                    throw(e);
                }
            }
        }
    }
    else {
        kill("No input files");
    }
})();

function kill(msg) {
    console.error(`Erorr: ${msg}`);
    process.exit(1);
}