const isImageHasValidDimentions = async (
    image: File,
    minImageSizePx: number,
    maxImageSizePx: number
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const imgUrl = URL.createObjectURL(image);
        img.src = imgUrl;
        img.onload = () => {
            const isFileProperSizePx =
                img.naturalWidth >= minImageSizePx &&
                img.naturalHeight >= minImageSizePx &&
                img.naturalWidth <= maxImageSizePx &&
                img.naturalHeight <= maxImageSizePx;
            URL.revokeObjectURL(imgUrl);
            if (isFileProperSizePx) resolve(true);
            else {
                const error = {
                    key: "allowedSizePx",
                    values: {
                        minSize: minImageSizePx,
                        maxSize: maxImageSizePx,
                    },
                };
                reject(error);
            }
        };

        img.onerror = () => {
            URL.revokeObjectURL(imgUrl);
            const error = {
                key: "errorUpload",
            };
            reject(error);
        };
    });
};

export default isImageHasValidDimentions;
