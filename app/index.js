const express = require("express"),
	app = express();

app.use("/", (req, res) => {
	console.log("Request received at /");
	let fruits = [{
		"name": "apple",
		"price": 100
	}, {
		"name": "banana",
		"price": 40
	}];

	res.status(200).send(fruits);
});

app.listen("3000", () => {
	console.log("App started listening on port 3000");
});
