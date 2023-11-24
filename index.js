const express = require("express");
const jimp = require("jimp");

module.exports = express()
.get("/night-mode", async function(req, res) {
	try {
		var image = await jimp.read(req.query.url);
		res.type(image.getMIME());
		res.end(await image.invert().getBufferAsync(image.getMIME()));
	} catch (e) {
		next(e);
	}
});
