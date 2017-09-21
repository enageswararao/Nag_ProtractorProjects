exports.config = {
	directConnect: true,
	multiCapabilities: [{
		browserName: 'chrome'
	}],
	framework: 'jasmine2',
	specs: ['./regression/*.spec.js'],
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
}
