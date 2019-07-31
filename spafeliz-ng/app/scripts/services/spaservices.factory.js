'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp')
  .factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices() {

  var dataServices = [
    {
      id: 1, name: 'Masaje sencillo', cost: '60000',
      description: '30 minutos de un genial masaje sin final feliz', happyEnding: false,
      image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
    },
    {
      id:2, name: 'Masaje de lujo', cost: '120000',
      description: '30 minutos de un genial masaje con final feliz', happyEnding: true,
      image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'
    }
  ];

  var services = {
    getAllServices: getAllServices,
    getServiceById: getServiceById
  };

  function getAllServices() {
    return dataServices;
  }

  function getServiceById(id) {
    //return dataServices.find(service => service.id === id);
  }

  // Public API here
  return services;
};
