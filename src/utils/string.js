
function removeAccents(str) {
	const accentsMap = {
		'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
		'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
		'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
		'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
		'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
		'ç': 'c',
		'Á': 'A', 'À': 'A', 'Ã': 'A', 'Â': 'A', 'Ä': 'A',
		'É': 'E', 'È': 'E', 'Ê': 'E', 'Ë': 'E',
		'Í': 'I', 'Ì': 'I', 'Î': 'I', 'Ï': 'I',
		'Ó': 'O', 'Ò': 'O', 'Õ': 'O', 'Ô': 'O', 'Ö': 'O',
		'Ú': 'U', 'Ù': 'U', 'Û': 'U', 'Ü': 'U',
		'Ç': 'C'
	};

	return str.replace(/[áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇ]/g, (match) => accentsMap[match]);
};

function removeSpaces(str) {
	return str.replaceAll(" ", "-");
}

module.exports = { removeSpaces, removeAccents };
