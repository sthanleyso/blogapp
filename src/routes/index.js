const { Router } = require("express");

const routes = Router();

routes.route("/")
	.get((req, res, next) => {
		res.render("index", { title: "Blog App" });
	})

module.exports = routes;
