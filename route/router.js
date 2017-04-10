let express = require('express');
let router = express.Router();

router.use(function (req, res) {
    res.send('router');
});
router.get('/router', function (req, res) {
    res.send('router get');
});
router.post('/router', function (req, res) {
    res.send('router post');
});

module.exports=router;