const isFileHasValidFileSize = (file: File, maxSizeInMB: number) => {
    return new Promise((resolve, reject) => {
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
        const isValidFileSize = file.size <= maxSizeInBytes;
        if (isValidFileSize) resolve(true);
        else {
            const error = {
                key: "allowedSize",
                values: {
                    maxSizeMB: maxSizeInMB,
                },
            };
            reject(error);
        }
    });
};

export default isFileHasValidFileSize;
