var util = require('util');

var menuXpath = '//div[contains(@class, "site-header__page-width-container")][contains(., %s)]';

var brandName = '//div[@class="catalog-grid"]//div/a[@data-style-id="1373231"]/div[@class="catalog-grid-product__details"]/div[@class="catalog-grid-product__brand-name"]';
var productTitle = '//div[@class="catalog-grid"]//div/a[@data-style-id="1373231"]/div[@class="catalog-grid-product__details"]/div[@class="catalog-grid-product__title"]';
var ringBrandName = '.summary__brand-link';
var ringProductName = '.summary__product-name';
var cartProductBrandName = '.cart-item-details__brand-name';
var cartProductTitle = '.cart-item-details__product-title';
var brandNameText, productTitleText;

module.exports = { 
	commands: [{
		verifyMenu () {
			this
				.assert.visible('@siteMenu');
			return this.api;
		},
		selectProductAndAdd () {
			this
				//click on category Women
				.click('@womenPath')
				this.api.pause(1000);
				//verify the sidebar is visible
				this.assert.visible('@sidebarSection');
				this.api.pause(1000);
				//verify Women->Jewelry is visible in sidebar
				this.assert.visible('@womenJewelry')
				//click Women->Jewelry
				this.click('@womenJewelry')
				this.api.pause(1000);
				//verify the Jewelry sidebar is visible
				this.assert.visible('@womenJewelrySideBar')
				//click Rings	
				this.click('@jewelryRing')
				this.api.useXpath()
				this.api.getText(brandName, function(result) { 
					brandNameText = result.value
				}); 
				this.api.getText(productTitle, function(result) { 
					productTitleText = result.value
				}); 
				//Select a particular ring
				this.assert.visible('@selectRing')
				this.click('@selectRing')
				this.api.pause(3000);
				//Verify that the ring name that we selected on the main page 
				//matches the ring name on the details page
				this.api.getText(ringBrandName, function(result) { 
					this.assert.equal(result.value, brandNameText);
				}); 
				this.api.getText(ringProductName, function(result) { 
					this.assert.equal(result.value, productTitleText); 
				}); 
				//Add the ring to cart
				this.click('@addToCartBtn')
				this.api.pause(2000);
				//verify the ring name on cart page as well
				this.api.getText(cartProductBrandName, function(result) { 
					this.assert.equal(result.value, brandNameText);
				}); 
				this.api.getText(cartProductTitle, function(result) { 
					this.assert.equal(result.value, productTitleText); 
				}); 
				//click on the checkout button
				this.click('@checkoutBtn')
				this.api.pause(1000)
				this.assert.visible('@checkoutHeading')	
			return this.api;	
		},
	}],
  
	elements: {
		siteMenu: '.site-header__primary-nav',
		women: { selector: util.format(menuXpath, 'Women'), locateStrategy: 'xpath' },
		shoes: { selector: util.format(menuXpath, 'Shoes'), locateStrategy: 'xpath' },
		handbags_accessories: { selector: util.format(menuXpath, "Handbags"), locateStrategy: 'xpath' },
		men: { selector: util.format(menuXpath, 'Men'), locateStrategy: 'xpath' },
		kids: { selector: util.format(menuXpath, 'Kids'), locateStrategy: 'xpath' },
		home: { selector: util.format(menuXpath, 'Home'), locateStrategy: 'xpath' },
		gifts: { selector: util.format(menuXpath, 'Gifts'), locateStrategy: 'xpath' },
		clearance: { selector: util.format(menuXpath, 'Clearance'), locateStrategy: 'xpath' },
		womenJewelry: {
			selector: '//div[@class="catalog-sidebar"]/ul/li/ul//a[@href="/shop/Women/Jewelry"]',
			locateStrategy: 'xpath'
		},
		womenJewelrySideBar: {
			selector: "//div[@data-scope='catalog']//div[@class='clearfix']/div[1]/ul",
			locateStrategy: 'xpath'
		},
		womenPath: {
			selector: '//header//div[@class="site-header__bottom"]//div[@class="site-header__page-width-container"]//ul/li/a[@href="/category/Women"]',
			locateStrategy: 'xpath'
		},
		sidebarSection: {
			selector: '//div[@class="catalog-sidebar"]',
			locateStrategy: 'xpath'
		},
		jewelryRing: {
			selector: '//div[@data-scope="catalog"]//div[@class="clearfix"]/div[1]/ul//ul/li[@data-level2="Rings"]/a',
			locateStrategy: 'xpath'
		},
		//select ring judith ripka ($214.97)
		selectRing: {
			selector: '//div[@class="catalog-grid"]//div/a[@data-style-id="1373231"]',
			locateStrategy: 'xpath'
		},
		addToCartBtn : '.add-to-cart.add-to-cart--nordstromrack',
		checkoutBtn : '.full-cart__checkout-button',
		checkoutHeading : '.checkout-page__page-heading',
	},	
};



