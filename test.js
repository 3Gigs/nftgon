const { createWriteStream } = require("fs");
const { NFTGon } = require(".");

(async () => {
    const png =  (await NFTGon.nftify(__dirname + "/testIMG.jpg"))
        .createPNGStream();
    const out = createWriteStream(__dirname + "/out.png");
    png.pipe(out);
})();
