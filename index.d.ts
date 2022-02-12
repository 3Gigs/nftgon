export interface toImgMethods {
    toPNGStream(config?: PngConfig): PNGStream;
    toJPEGStream(config?: JpegConfig): JPEGStream;
    toDataURL(mimetime?: string): string;
}

export function nftify(path: string): toImgMethods;