const { createWriteStream } = require("fs");
const { NFTGon } = require(".");

const imgAvatar = "https://picsum.photos/400/400";

(async () => {
    const png =  (await NFTGon.nftify(imgAvatar))
        .createPNGStream();
    const out = createWriteStream(__dirname + "/out.png");
    png.pipe(out);
})();
