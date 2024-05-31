const map = require('./map.json');
const getMap = () => {
	const position = { x: 3, y: 5 };
	const height = map.height;

	const layers = map.layers.map(l => {
		const dataMinus1 = l.data.map(n => n - 1);
		const data = Array(height);
		for (let i = 0; i < data.length; i++) {
			data[i] = Array(height);
		}

		for (let i = 0; i < height; i++) {
			for (let j = 0; j < height; j++) {
				data[i][j] = dataMinus1[i * j];
			}
		}
		const finalData = Array(21);
		for (let i = 0; i < 21; i++) {
			finalData[i] = Array(21);
		}

		for (let i = 0; i < finalData.length; i++) {
			for (let j = 0; j < finalData.length; j++) {
				const cameraX = i + position.x - Math.floor(finalData.length / 2);
				const cameraY = j + position.x - Math.floor(finalData.length / 2);
				if (cameraX < 0 || cameraY < 0) {
					finalData[i][j] = -1;
				} else {
					finalData[i][j] = data[cameraX][cameraY];
				}
			}
		}

		finalData;
		return { name: l.name, view: finalData };
	});

	console.log(layers[0]);

	return layers;
};

const newMap = getMap();

module.exports = { newMap };
