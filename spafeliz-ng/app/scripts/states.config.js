'use strict';

angular.module('spafelizApp').config([
  '$stateProvider',
  function settings($stateProvider) {
    var homeState = {
      abstract: true,
      name: 'home',
      templateUrl: 'views/home.html'
    };

    var mainState = {
      name: 'home.main',
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as vm'
    };

    var detailState = {
      name: 'home.detail',
      url: '/detail/{id}',
      templateUrl: 'views/detail.html',
      controller: 'ServiceDetailCtrl as vm'
    };

    var bookingState = {
      name: 'home.booking',
      url: '/booking',
      templateUrl: 'views/booking.html',
      controller: 'BookingCtrl as vm'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(detailState);
    $stateProvider.state(bookingState);
  }]);
