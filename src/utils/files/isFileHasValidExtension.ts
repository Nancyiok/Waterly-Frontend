const isFileHasValidExtension = (
    file: File,
    validExtensions: Array<string>
) => {
    return new Promise((resolve, reject) => {
        const extension = file.name.split(".").pop()?.toLowerCase() || "";
        const isFileHasValidExtention = validExtensions.includes(extension);
        if (isFileHasValidExtention) resolve(true);
        else {
            const error = {
                key: "allowedFormats",
                values: {
                    extensions: validExtensions.join(", "),
                },
            };
            reject(error);
        }
    });
};

export default isFileHasValidExtension;
