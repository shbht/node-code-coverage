var im = require('istanbul-middleware'),
    isCoverageEnabled = true;//(process.env.COVERAGE == "true"); // or a mechanism of your choice

//before your code is require()-ed, hook the loader for coverage
if (isCoverageEnabled) {
    console.log('Hook loader for coverage - ensure this is not production!');
		console.log("coverage dir path ", __dirname);
    im.hookLoader(__dirname);
        // cover all files except under node_modules
        // see API for other options
}


const express = require("express"),
	app = express();

app.use("/fruits", (req, res) => {
	console.log("Request received at /fruits");
	let fruits = [{
		"name": "apple",
		"price": 100
	}, {
		"name": "banana",
		"price": 40
	}];

	res.status(200).send(fruits);
});

if (isCoverageEnabled) {
    //enable coverage endpoints under /coverage
    app.use('/coverage', im.createHandler());
}

app.listen("3000", () => {
	console.log("App started listening on port 3000");
});

module.exports = app;
