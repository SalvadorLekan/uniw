const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro"); // <-- add this import

const config = getDefaultConfig(__dirname);

// your metro modifications

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./src/app/global.css", // <- path to global.css file
  dtsFile: "./src/uniwind.d.ts", // path where we gonna auto-generate typings
});
