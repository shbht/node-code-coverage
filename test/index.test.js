let chai = require('chai');

describe('Fruits', () => {
  describe('/ api endpoint', () => {
	  it('should return all colors', function() {
	    return chai.request(app)
	      .get('/')
	      .then(function(res) {
						expect(res).to.have.status(200);
						expect(res).to.be.json;
						expect(res.body).to.be.an('object');
						expect(res.body.results).to.be.an('array');
				});
	  });
	});
});
