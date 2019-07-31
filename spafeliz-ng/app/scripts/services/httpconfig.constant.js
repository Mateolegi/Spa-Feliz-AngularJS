'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.httpConfig
 * @description
 * # httpConfig.constant
 * Constant in the spafelizApp.
 */
angular.module('spafelizApp')
  .constant('httpConfig', {
    url: '//localhost:3000/',
    services: {
      all: 'services'
    },
    booking: {
      all: 'booking'
    }
  });
