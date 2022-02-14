**Turn any 1:1 sized avatar into an NFT!**

- [Installation](#installation)
- [Usage](#usage)
  - [CLI](#cli)
  - [Node.js](#nodejs)

# Installation
1. Install [nodejs](https://nodejs.org)
2. Install NFTgon  
    * Global (Required for CLI)  
    ``` npm install -g nftgon ```
    * Locally  
    ``` npm install nftgon ```

# Usage
## CLI
Currently all images output to .png **ONLY**, I will add jpeg support later  
  
**Usage: ``` nftgon [OPTIONS] input [input...]```**  
-o, --output _PATH_  
> Specify output path

-O --options _{\\"key\\": value}_  
> Comma separated list of options  
> Refer to [this](https://www.npmjs.com/package/canvas#documentation) for a list of all options  

**Example:**  
```nftgon -o ./hexagoned.png -O {\"compressionLevel\": 5 } https://picsum.photos/400/400 ./test.jpg```  
## Node.js
```js
const { NFTGon } = require("nftgon");


const imgIn = "https://picsum.photos/400/400";

const imgOut = NFTGon.nftify(imgIn);
const png = imgOut.createPNGStream({compressionLevel: 6});
```