var cleanup = require('./utils/cleanup.js')

module.exports = {
  before : function(browser, done) {
    cleanup(done)
  },
  'User can log in': function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#inputUsername')
      .setValue('#inputUsername', 'user')
      .waitForElementVisible('#inputPassword')
      .setValue('#inputPassword', 'user')
      .click('button[type=submit]')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Dashboard')
  },
  'User can log out': function(browser) {
    browser
      .waitForElementVisible('#logout-link')
      .click('#logout-link')
      .waitForElementVisible('h2')
      .assert.containsText('h2', 'Please log in');
  },
  "User can't access dashboard when logged out": function(browser) {
    browser
      .waitForElementVisible('#inputUsername')
      .url(browser.launch_url + 'dashboard')
      .waitForElementVisible('.alert.alert-danger')
      .assert.containsText('.alert.alert-danger', 'You have to be logged in to access the page.')
      .end()
  }
}