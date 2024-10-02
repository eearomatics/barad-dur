module.exports = {
  ci: {
    collect: {
      settings: {
        extraHeaders: JSON.stringify({["User-Agent"]: 'Mozilla/5.0 (compatible; EE-Aromatics-BotScraper/1.0; +https://eearomatics.com/bot)'}),
      },
    },
  },
};
