module.exports = {
    'default': { // 'default' environnement parameters
        email : 'nightwatchuser@example.com',
        pass : 'test123',
		firstname: 'Niyati',
		lastname: 'Dalal',
		address1: '228 Park Ave S',
		city: 'New York',
		zipcode: '10003',
		phone: '4444444444',
    },
	
	// Abort all on test failure
    abortOnAssertionFailure: true,
	
	// Duration between two checks
    waitForConditionPollInterval: 300,
	
	// Timeout duration
    waitForConditionTimeout: 1000,
	
	/*
     * Define whether the test fails when many HTML elements are found when
     * we are expecting only one
     */
    throwOnMultipleElementsReturned: false,

    // Before/After Hooks of all tests
    //before: (next) => next(),
    //after: (next) => next(),

    // Before/After Hooks of test suites
    //beforeEach: (browser, next) => next(),
    //afterEach: (browser, next) => next(),

    // To customize output report
    //reporter: (results, next) => next()
};
