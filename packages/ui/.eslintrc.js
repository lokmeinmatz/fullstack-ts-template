module.exports = {
  rules: {
    "import/no-extraneous-dependencies": ["off", { devDependencies: false, optionalDependencies: false, peerDependencies: false}]
  }
}