module.exports = {
  ci: {
    collect: {
      settings: {
        extraHeaders: JSON.stringify({Referer: 'https://lhci.eearomatics.com'}),
      },
    },
  },
};
