const express = require('express');
const router = express.Router();
// const { series } = require('../series/series-controller');


const seriesController = require('../series/series-controller');

router.get('/series/:collectionName', seriesController.getSeriesData);


// router.route('/series/:title').get(series);

module.exports = router;