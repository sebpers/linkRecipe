const express = require('express');
const recipe = require('./recipe');
const router = express.Router();

//middleware that is spec to this router that gives us a time
router.use(function timelog(req, res, next) {
  console.log('Time is now:', Date.now());
  next();
});

// routes for recipes
router.get('/recs', recipe.get);
router.get('/recs/:id', recipe.getById);
router.post('/recs', recipe.post);
router.put('/recs/:id', recipe.put);
router.delete('/recs/:id', recipe.deleteById);

module.exports = router;