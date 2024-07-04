const { generateSitemap } = require("../services/sitemapService");
const { sitemapCreationOptions, cliOptions, jsonCreationInfos } = require("../utils/options");

async function handleCliOptions() {
	const userCreationOption = await cliOptions();

	switch (userCreationOption) {
		case "sitemap":
			handleSitemapOptions()
	}

}

async function handleSitemapOptions() {
	const userSitemapCreationOption = await sitemapCreationOptions();

	switch (userSitemapCreationOption) {
		case "json":
			const { inputFile, outputFile, websiteUrl } = await jsonCreationInfos();
			generateSitemap(inputFile, outputFile, websiteUrl);
	}
}

module.exports = { handleCliOptions };
