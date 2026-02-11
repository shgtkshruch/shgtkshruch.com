module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    // TODO: pass recommended assertion
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
