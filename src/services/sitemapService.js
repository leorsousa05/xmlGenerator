const fs = require("fs");
const { readJsonFile } = require("../utils/fileReader.js");

function generateSitemap(inputFilePath, outputFilePath, websiteUrl) {
	readJsonFile(inputFilePath)
		.then(data => {
			const keywords = data.keywords;
			const urls = keywords.map(keyword => websiteUrl + keyword);
			const sitemap = createSitemap(urls)
			fs.writeFileSync(outputFilePath, sitemap);
		})
		.catch(error => {
			console.error("Ocorreu algum erro!: ", error)
		});
}

function createSitemap(urls) {
	let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

	urls.forEach(url => {
		sitemap += '  <url>\n';
		sitemap += `    <loc>${url}</loc>\n`;
		sitemap += '    <priority>1.0</priority>\n';
		sitemap += '  </url>\n';
	});

	sitemap += '</urlset>';
	return sitemap;
}

module.exports = {
	generateSitemap
}
