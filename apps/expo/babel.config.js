module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo'
        ],
        plugins: [
            'react-native-reanimated/plugin',
            [
                "module-resolver", {
                root: ".",
                alias: {
                    "@components": "./src/components",
                    "@constants": "./src/constants",
                    "@data": "./src/data",
                    "@lib": "./src/lib",
                    "@navigation": "./src/navigation",
                    "@screens": "./src/screens",
                    "@utils": "./src/utils",
                    "@assets": "./assets",
                },
            }],
        ],
    };
};
