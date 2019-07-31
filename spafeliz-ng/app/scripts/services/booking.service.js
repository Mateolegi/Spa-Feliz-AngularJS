'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.booking.service
 * @description
 * # booking.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('bookingService', bookingService);

bookingService.$inject = ['$http', 'httpConfig'];

function bookingService($http, httpConfig) {
  let services = {
    create: create
  };

  return services;

  function create(booking) {
    const url = httpConfig.url + httpConfig.booking.all;
    return $http.post(url, booking);
  }
}
