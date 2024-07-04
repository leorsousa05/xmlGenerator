const fs = require("fs");

async function readJsonFile(filePath) {
	const file = fs.readFileSync(filePath);
	return JSON.parse(file);
}

module.exports = { readJsonFile };
