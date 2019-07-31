const Booking = require('../models/bookingModel');
const conn = require('../database/connection');

exports.booking_create = function (req, res) {
  const booking = Booking.build({
    nombre_persona: req.body.nombre_persona,
    id_servicio: req.body.id_servicio,
    fecha: req.body.fecha,
    email: req.body.email
  });
  booking.save()
    .then(() => {
      res.status(201).send('""').end();
    }).catch(error => {
      console.error(error);
      res.status(500).send('No se pudo almacenar la reserva');
    });
};
