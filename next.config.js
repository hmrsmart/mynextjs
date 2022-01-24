module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  env: {
     SPREADSHEET_ID : ***,
     SHEET_ID : ***,
     CLIENT_EMAIL : ***,
     PRIVATE_KEY : ***,

  },
  webpack: (config, options) => {
    config.node= {
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    ...config.node,
    fs: 'empty',
    child_process : 'empty',
    net : 'empty',
    tls: 'empty',
  }

    return config
  },
};