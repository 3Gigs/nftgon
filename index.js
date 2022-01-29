'use strict'

const { execSync } = require('child_process');
const { existsSync } = require('fs')
const { tmpdir } = require('os');
const { join } = require('path')
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const tmp = tmpdir();
const mask = 'nftMask.png';

rl.question('Enter the path of the image:\n', (answer, err) => {
    rl.close();
    if(err)
        throw err;
    if(!existsSync(answer))
        throw new Error("Image cannot be found");
    xd(answer);
});

function xd(imgNamePath) {
    console.log("Checking size...");
    if(size.width != 400 && size.height != 400)
    {
        console.log("❗A Twitter avatar sized (400x400) image is required. Using a resized version of the image...");
        const imgName = imgNamePath.slice(imgNamePath.search(/[^\\]+$/)).replace(/\.[^\.]+$/, "");
        const ext = imgNamePath.slice(imgNamePath.search(/\.[^\.]+$/));
        const tmpImgPath = join(tmp, imgName)+ "_resized" + ext.toString();
        console.log(tmpImgPath);
        execSync(`magick ${imgNamePath} -resize 400x400\! ${tmpImgPath}`, (error) => {
            console.log("Error while resizing");
            console.error(error);
        });
        execSync(`magick ${tmpImgPath} ${mask} -alpha off -compose copyalpha -composite ${(tmpImgPath.replace(/\.[^\.]+$/, ""))}_nft${tmpImgPath.slice(tmpImgPath.search(/\.[^\.]+$/))}`, (error)=> {
            console.log("Error while creating NFT");
            console.error(error)
        });
    }}

