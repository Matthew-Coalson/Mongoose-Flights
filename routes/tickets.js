const router = require('express').Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets/create', ticketsCtrl.create);


module.exports = router;