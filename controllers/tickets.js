const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    const flightId = req.params.id;
    res.render('tickets/new', { title: 'Add Ticket', flightId})
}

function create(req, res) {
    const ticket = new Ticket(req.body);
    ticket.save(function(err) {
        if (err) return res.redirect(`/flights/${req.params.id}/tickets/new`);
        res.redirect(`/flights/${req.params.id}`);
    });
}