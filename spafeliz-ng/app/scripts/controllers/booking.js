'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('BookingCtrl', bookingController);

bookingController.$inject = ['$scope', 'spaServicesHttp', 'bookingService'];

function bookingController($scope, spaServicesHttp, bookingService) {
  var vm = this;
  vm.$onInit = onInit;
  vm.submitBook = submitBook;

  function onInit() {
    spaServicesHttp.getAll()
      .then(function (data) {
        vm.services = data.data;
      }).catch(console.log);
  }

  function submitBook() {
    console.log($scope.form);
    console.log(vm.book);
    const fecha = combinarFechas(vm.book.fecha, vm.book.hora);
    console.log(fecha.toLocaleString());
    const newBooking = {
      nombre_persona: vm.book.fullName,
      id_servicio: vm.book.service,
      fecha: combinarFechas(vm.book.fecha, vm.book.hora),
      email: vm.book.email
    };
    bookingService.create(newBooking)
      .then(() => alert('Su reserva fue programada exitosamente.'))
      .catch(() => alert('Error programando su reserva.'))
  }

  /**
   * Combina la fecha y hora en un solo objeto
   * @param {Date} fecha fecha
   * @param {Date} hora hora
   */
  function combinarFechas(fecha, hora) {
    fecha.setHours(hora.getHours(), hora.getMinutes(), hora.getSeconds());
    return fecha;
  }
}
