const frisby = require("frisby"),
	baseUrl = "http://localhost:3000";

describe("test cases for / api", () => {
	it("should return status 200", (done) => {
		let url = baseUrl + "/fruits";

		frisby
			.get(url)
			.expect("status", 200)
			.done(done);
	});
});
