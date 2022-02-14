const { loadImage, createCanvas } = require("canvas");

class NFTGon {
    /**
     * Emulates hexagon clip-path.
     * 
     * Call this function before loading image into canvas!
     * 
     * @param ctx The canvas context
    */
    static hexagonify(ctx) {
        ctx.scale(2.0, 2.1);
        ctx.beginPath();
        ctx.moveTo(193.248, 69.51);
        ctx.bezierCurveTo(185.95, 54.1634, 177.44, 39.4234, 167.798, 25.43);
        ctx.lineTo(164.688, 20.96);
        ctx.bezierCurveTo(160.859, 15.4049, 155.841, 10.7724, 149.988, 7.3994);
        ctx.bezierCurveTo(144.155, 4.02636, 137.633, 1.99743, 130.908, 1.46004);
        ctx.lineTo(125.448, 1.02004);
        ctx.bezierCurveTo(108.508, -0.340012, 91.4873, -0.340012, 74.5479, 1.02004);
        ctx.lineTo(69.0879, 1.46004);
        ctx.bezierCurveTo(62.3625, 1.99743, 55.8413, 4.02636, 49.9981, 7.3994);
        ctx.bezierCurveTo(44.155, 10.7724, 39.1367, 15.4049, 35.3079, 20.96);
        ctx.lineTo(32.1979, 25.47);
        ctx.bezierCurveTo(22.5561, 39.4634, 14.0458, 54.2034, 6.74789, 69.55);
        ctx.lineTo(4.39789, 74.49);
        ctx.bezierCurveTo(1.50233, 80.5829, 0, 87.2441, 0, 93.99);
        ctx.bezierCurveTo(0, 100.736, 1.50233, 107.397, 4.39789, 113.49);
        ctx.bezierCurveTo(6.74789, 118.43);
        ctx.bezierCurveTo(14.0458, 133.777, 22.5561, 148.517, 32.1979, 162.51);
        ctx.lineTo(35.3079, 167.02);
        ctx.bezierCurveTo(39.1367, 172.575, 44.155, 177.208, 49.9981, 180.581);
        ctx.bezierCurveTo(55.8413, 183.954, 62.3625, 185.983, 69.0879, 186.52);
        ctx.lineTo(74.5479, 186.96);
        ctx.bezierCurveTo(91.4873, 188.32, 108.508, 188.32, 125.448, 186.96);
        ctx.lineTo(130.908, 186.52);
        ctx.bezierCurveTo(137.638, 185.976, 144.163, 183.938, 150.006, 180.554);
        ctx.bezierCurveTo(155.85, 177.17, 160.865, 172.526, 164.688, 166.96);
        ctx.lineTo(167.798, 162.45);
        ctx.bezierCurveTo(177.44, 148.457, 185.95, 133.717, 193.248, 118.37);
        ctx.lineTo(195.598, 113.43);
        ctx.bezierCurveTo(198.493, 107.337, 199.996, 100.676, 199.996, 93.93);
        ctx.bezierCurveTo(199.996, 87.1841, 198.493, 80.5229, 195.598, 74.43);
        ctx.lineTo(193.248, 69.51);

        ctx.clip();

        // Reset current transformation matrix to the identity matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    /**
     * NFT-ifies your avatar
     * 
     * @param path 
     * @returns {Promise} An NFT-fied canvas
     */
    static async nftify(path) {
        const canvas = createCanvas(400, 400);
        const ctx = canvas.getContext("2d");
        const inputImg = await loadImage(path);

        NFTGon.hexagonify(ctx);
        ctx.drawImage(inputImg, 0, 0);

        return canvas;
    }
}

module.exports = {
    NFTGon
}