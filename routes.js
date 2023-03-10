var controller = require('./controllers');
var router = require('express').Router();

router.get('/reviews/meta/:product_id', controller.meta.get);

router.get('/reviews/:product_id/:page?/:count?/:sort?', controller.reviews.get);

router.post('/reviews', controller.reviews.post);

router.put('/reviews/:review_id/helpful', controller.reviews.helpful);

router.put('/reviews/:review_id/report', controller.reviews.report);

router.get('/loaderio-5dcdf417719abd0b18c776b964f9a420', (req, res) => res.send('loaderio-5dcdf417719abd0b18c776b964f9a420'));

module.exports = router;