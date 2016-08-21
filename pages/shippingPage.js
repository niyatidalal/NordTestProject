module.exports = {
	
	commands: [{
		addShippingAddress () {
			this
				.click('@addShippingBtn')
				.setValue('@firstName', this.api.globals.firstname)
				.setValue('@lastName', this.api.globals.lastname)
				.setValue('@addressLine1', this.api.globals.address1)
				.setValue('@city', this.api.globals.city)
				.click('@state')
				.click('@stateOption')
				.setValue('@zipCode', this.api.globals.zipcode)
				.setValue('@phoneNumber', this.api.globals.phone)
				.waitForElementVisible('@saveBtn')
				.click('@saveBtn')
				this.api.pause(1000);
			return this.api;	
		},
	}],
	
	elements: {
		addShippingBtn : {
			selector: '//div//section[1]//div[@data-render="checkout-shipping-addresses"]//button',
			locateStrategy: 'xpath'
		},
		firstName : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping given-name"]',
			locateStrategy: 'xpath'
		},
		lastName : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping family-name"]',
			locateStrategy: 'xpath'
		},
		addressLine1 : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping address-line1"]',
			locateStrategy: 'xpath'
		},
		addressLine2 : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping address-line2"]',
			locateStrategy: 'xpath'
		},
		city : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping address-level2"]',
			locateStrategy: 'xpath'
		},
		state : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//select[@autocomplete="shipping address-level1"]',
			locateStrategy: 'xpath'
		},
		stateOption : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//select[@autocomplete="shipping address-level1"]/option[37]',
			locateStrategy: 'xpath'
		},
		zipCode : {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping postal-code"]',
			locateStrategy: 'xpath'
		},
		phoneNumber: {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//input[@autocomplete="shipping tel"]',
			locateStrategy: 'xpath'
		},
		saveBtn: {
			selector: '//div[@data-render="checkout-shipping-addresses"]//form//button[@type="submit"]',
			locateStrategy: 'xpath'
		},
	},	
};