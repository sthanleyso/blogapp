const { Router } = require('express');

const routes = Router();

routes.route('/')
  .get((req, res) => {
    res.render('pages/admin/index', { title: 'Página do admin' });
  });

routes.route('/posts')
  .get((req, res) => {
    res.send({ ok: true });
  });

routes.route('/categories')
  .get((req, res) => {
    res.render('pages/admin/categories', { title: 'Categorias' });
  })
  .post((req, res) => {
    res.send({ ok: true });
  });

module.exports = routes;
