module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo'
        ],
        plugins: [
            [
                "module-resolver", {
                root: ".",
                alias: {
                    "@components": "./src/components",
                    "@lib": "./src/lib",
                    "@utils": "./src/utils",
                },
            }],
        ],
    };
};
