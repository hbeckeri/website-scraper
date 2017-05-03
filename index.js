'use strict';

var scrape = require('website-scraper');

scrape({
	urls: ['https://www.epa.gov/open'],
	recursive: true,
	maxDepth: 1000,
	filenameGenerator: 'bySiteStructure',
	urlFilter: (url) => url.includes('https://www.epa.gov'),
	directory: 'src',
	request: {
		headers: {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
		}
	},
	onResourceSaved: (resource) => {
		console.log(`Resource ${resource} was saved to fs`);
	}
})
	.then(console.log)
	.catch(console.log);
