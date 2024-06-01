const express = require('express');

const { newMap } = require('./map');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/hello', (req, res) => {
	const { hello } = req.query;
	if (!hello) {
		return res.status(400).send('Please provide a query parameter');
	}

	res.send(`Hello ${hello}`);
});

app.get('/get-update_1', (req, res) => {
	const map = [];
	for (let i = 0; i < 21; i++) {
		const line = [];
		for (let i = 0; i < 21; i++) {
			line.push(73);
		}
		map.push(line);
	}

	res.json({
		team: null,
		player: null,
		players: null,
		layers: [
			{
				name: 'Test',
				view: map
			}
		],
		test_get_update_0: true
	});
});

app.get('/get-update', (req, res) => {
	const map = newMap;
	console.log(newMap);

	res.json({
		team: null,
		player: null,
		players: null,
		layers: map,
		test_get_update_1: true,
		test: [map.length]
	});
});

app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});
