const { select, input } = require("@inquirer/prompts");

async function cliOptions() {
	const answer = await select({
		message: "Oque você deseja criar?",
		choices: [
			{
				name: "Sitemap XML",
				value: "sitemap",
				description: "Crie um sitemap XML para seu website!"
			}
		]
	});

	return answer
}

async function sitemapCreationOptions() {
	const answer = await select({
		message: "Selecione uma forma de enviar os links!",
		choices: [
			{
				name: "json",
				value: "json",
				description: "Envie um JSON com as palavras chaves dentro de uma array \"keywords\" ",
			}
		]
	})
	return answer
}

async function jsonCreationInfos() {
	const inputFile = await input({ message: "Coloque o path do arquivo!" });

	const outputFile = await input({ message: "Coloque onde você quer que saia! default: sitemap.xml " })
		.then(answer => answer ? answer : "sitemap.xml");
	const websiteUrl = await input({ message: "Coloque o link do website. Ex: https://example.com/ !" })
		.then(answer => answer ? answer : "https://example.com/");



	return {
		inputFile,
		outputFile,
		websiteUrl
	}
}

module.exports = { cliOptions, sitemapCreationOptions, jsonCreationInfos };
