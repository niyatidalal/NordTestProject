module.exports = {
	url: 'http://www.nordstromrack.com/',
	
	commands: [{
		verifyLogInLink () {
			this
				.assert.visible('@loginLink')
				.click('@loginLink')
			return this.api;
		},
		verifySignUp () {
			this
				.waitForElementVisible('@signupPopup')
				.click('@signinLink')
				this.api.pause(1000);
			return this.api;
		},
        login () {
			this
				.waitForElementVisible('@emailInput')
				.setValue('@emailInput', this.api.globals.email)
				.setValue('@passInput', this.api.globals.pass)
				.waitForElementVisible('@loginButton')
				.click('@loginButton')
				this.api.pause(1000);
			return this.api;
		}
    }],
	
    elements: {
		loginLink: '.secondary-nav__link',
		signupPopup: '.authentication-modal.authentication-modal--nordstromrack.authentication-modal--sign-up',
		signinLink: '.authentication-modal__alternate-action',
		emailInput: {
			selector: '//input[@name="email"]',
			locateStrategy: 'xpath' 
		},
		passInput: {
			selector: '//input[@name="password"]',
			locateStrategy: 'xpath'
		},
		loginButton: { 
			selector: '//div[@class="authentication-modal__submit"]/button',
			locateStrategy: 'xpath'
		}	
	},
	
};