const express = require('express');

const poolResultsRoutes = require('./poolResultsRoutes');

const router = express.Router();

router.use('/pool-results', poolResultsRoutes);

module.exports = router;