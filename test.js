const { createWriteStream } = require("fs");
const imgSizeOf = require("image-size");
const { NFTGon } = require(".");
const assert = require("assert");

// Basic NFTify image
(async () => {
    const imgAvatar = "https://picsum.photos/400/400";
    const png =  (await NFTGon.nftify(imgAvatar)).createPNGStream();
    const out = createWriteStream(__dirname + "/out.png");
    png.pipe(out);
    out.on("finish", () => {
        const dimensions = imgSizeOf.imageSize(__dirname + "/out.png");
        try {
            assert.equal(400, dimensions.width) ;
            assert.equal(400, dimensions.height);
            console.log("✅ Image outputted was valid!")
        } catch(e) {
            console.warn("❌ Image outputted was invalid!")
        }
    });
})();

// Using a 16:9 image as input
(async () => {
    const imgInput = "https://picsum.photos/1920/1080";
    const png =  (await NFTGon.nftify(imgInput)).createPNGStream();
    const out = createWriteStream(__dirname + "/out1080.png");
    png.pipe(out);

    out.on("finish", () => {
        const dimensions = imgSizeOf.imageSize(__dirname + "/out1080.png");
        const ratio = (dimensions.width / dimensions.height)
        assert.equal(1, ratio);
    })
})();
