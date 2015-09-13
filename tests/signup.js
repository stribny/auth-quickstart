var cleanup = require('./utils/cleanup.js')

var username = 'testUser'
var password = 'testUser'

module.exports = {
  before : function(browser, done) {
    cleanup(done)
  },
  'User can sign up': function(browser) {
    browser
      .url(browser.launch_url + '/signup')
      .waitForElementVisible('#inputUsername')
      .setValue('#inputUsername', username)
      .waitForElementVisible('#inputPassword')
      .setValue('#inputPassword', password)
      .waitForElementVisible('#inputPassword2')
      .setValue('#inputPassword2', password)
      .click('button[type=submit]')
      .pause(2000)
      .waitForElementVisible('h2')
      .assert.containsText('h2', 'Please log in')
      .waitForElementVisible('#inputUsername')
      .setValue('#inputUsername', username)
      .waitForElementVisible('#inputPassword')
      .setValue('#inputPassword', password)
      .click('button[type=submit]')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Dashboard')
      .end()
  }
}