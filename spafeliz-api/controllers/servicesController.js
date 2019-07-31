const serviceModel = require('../models/servicesModel');

exports.services_all_get = function (req, res) {

  serviceModel.findAll({
    attributes: ['id', 'name', 'description', 'cost', 'happy', 'image']
  }).then(data => res.json(data))
    .catch(() => res.status(500).send('Error '));
};

exports.services_detail_get = function (req, res) {
  serviceModel.findByPk(req.params.id, {
    attributes: ['id', 'name', 'description', 'cost', 'happy', 'image']
  }).then(data => res.json(data))
    .catch(() => res.status(500).send('Error '));
};
