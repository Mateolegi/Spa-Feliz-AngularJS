'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:ServicedetailControllerCtrl
 * @description
 * # ServicedetailControllerCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('ServiceDetailCtrl', serviceDetailCtrl);

serviceDetailCtrl.$inject = ['$state', 'spaServicesHttp'];

function serviceDetailCtrl($state, spaServicesHttp) {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    let id = $state.params.id;
    spaServicesHttp.getById(id)
      .then(function (data) {
        vm.service = data.data;
      }).catch(console.log);
  }
}
