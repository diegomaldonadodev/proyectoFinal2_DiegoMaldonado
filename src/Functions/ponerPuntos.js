export const ponerPuntos = (precio) => {
	let array = [];
	let cont = 1;

	for (let i = precio.length - 1; i >= 0; i--) {
		array.unshift(precio[i].toString());
		if (cont % 3 === 0 && i !== 0) {
			array.unshift('.');
		}

		cont++;
	}

	let texto = array.join('');
	return texto;
};