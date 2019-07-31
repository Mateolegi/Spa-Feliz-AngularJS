'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServicesHttp'];

function mainCtrl(spaServicesHttp) {

  var vm = this;
  vm.$onInit = onInit;
  vm.loadAllServices = loadAllServices;

  function onInit() {
    vm.loadAllServices();
  }

  function loadAllServices() {
    spaServicesHttp.getAll()
      .then(function (data) {
        vm.services = data.data;
      }).catch(console.log);
  }
}
