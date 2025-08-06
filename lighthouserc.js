module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
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
