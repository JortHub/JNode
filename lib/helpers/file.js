module.exports = function(path) {
	var fs = require("fs");
	var self = {};
	self.path = path;
	self.data = null;

	self.read = function() {
		fs.readFile(path, 'utf8', function(err, data) {
			if(err) {
				return console.log(err);
			}

			self.data = data;
		}
	}

	return self;
}