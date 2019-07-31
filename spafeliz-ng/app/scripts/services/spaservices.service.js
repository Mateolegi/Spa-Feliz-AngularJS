'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.service
 * @description
 * # spaServices.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('spaServicesHttp', spaServicesHttp);

spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesHttp($http, $q, httpConfig) {

  let services = {
    getAll: getAll,
    getById: getById
  };

  return services;

  function getAll() {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.services.all;
    $http.get(url)
      .then(function (data) {
        defered.resolve(data);
      }).catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }

  function getById(id) {
    const url = httpConfig.url + httpConfig.services.all + '/' + id;
    return $http.get(url);
  }
}
