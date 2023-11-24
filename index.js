const jimp = require("jimp");

module.exports = async function(req, res) {
	try {
		var image = await jimp.read(new URL("s://" + req.url).searchParams.get("url"));
		res.setHeader("Content-Type", image.getMIME());
		res.end(await image.invert().getBufferAsync(image.getMIME()));
	} catch (e) {
		res.statusCode = 400;
		res.end(e.stack);
	}
};
