module.exports = {
  presets: ["next/babel"],
  env: {
    production: { plugins: ["react-remove-properties"] },
  },
};
