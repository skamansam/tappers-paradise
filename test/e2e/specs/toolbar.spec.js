// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Top Toolbar': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('nav .toolbar__content ')
      .assert.containsText('.toolbar__title', 'Tapper\'s Paradise')
      .assert.elementCount('button .icon', 5)
      .end()
  }
}
