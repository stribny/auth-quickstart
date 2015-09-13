var cleanup = require('./utils/cleanup.js')

module.exports = {
  before : function(browser, done) {
    cleanup(done)
  },
  "User can't log in with bad credentials": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#inputUsername')
      .setValue('#inputUsername', 'user')
      .waitForElementVisible('#inputPassword')
      .setValue('#inputPassword', 'bad password')
      .click('button[type=submit]')
      .waitForElementVisible('.alert.alert-danger')
      .assert.containsText('.alert.alert-danger', 'Incorrect credentials.')
      .end()
  }
}