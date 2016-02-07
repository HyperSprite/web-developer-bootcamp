const express = require('express');
const router = express.Router();

// HOME ////////////////////////////////
router.get('/', function(req, res) {
  res.status(200).render('home');
});

module.exports = router;
