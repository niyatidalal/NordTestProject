/* 
Go to nordstromrack.com
login
pick any product
verify product details
add to cart
verify cart details
fill in billing / shipping 
End
*/

module.exports = {
    'Go To nordstromrack': (client) => {
        var loginPage = client.page.loginPage();
		loginPage
			.navigate()
            .verifyLogInLink()
			
		loginPage.verifySignUp()
        loginPage.login()
	},

	'Select product, verify product details and add to cart': (client) => {
		var productPage = client.page.productPage();
	
		//Verify the site menu is visible
		productPage.verifyMenu()
		//Verify the menu items are present
		productPage.expect.element('@women').to.be.visible;
		productPage.expect.element('@shoes').to.be.visible;
		productPage.expect.element('@handbags_accessories').to.be.visible;
		productPage.expect.element('@men').to.be.visible;
		productPage.expect.element('@kids').to.be.visible;
		productPage.expect.element('@home').to.be.visible;
		productPage.expect.element('@gifts').to.be.visible;
		productPage.expect.element('@clearance').to.be.visible;
		productPage.selectProductAndAdd()
	},
	
	'Add shipping Address': (client) => {
		var shippingPage = client.page.shippingPage();
		shippingPage.addShippingAddress()
	},
	
    after: (client) => {
        client.end();
    }
};

