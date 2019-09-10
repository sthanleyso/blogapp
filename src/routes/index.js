const { Router } = require("express");

const routes = Router();

routes.route("/")
	.get((req, res) => {
		res.send({ ok: true });
	})

module.exports = routes;
