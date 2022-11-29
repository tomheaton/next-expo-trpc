module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      "nativewind/babel",
      // ["nativewind/babel", { mode: "transformOnly" }]
      [
        "module-resolver", {
        root: ".",
        alias: {
          "@components": "./src/components",
          "@utils": "./src/utils",
        },
      }
      ],
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve("expo-router/babel"),
    ],
  };
};
