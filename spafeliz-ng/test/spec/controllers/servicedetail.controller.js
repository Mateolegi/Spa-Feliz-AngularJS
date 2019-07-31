'use strict';

describe('Controller: ServicedetailControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var ServicedetailControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicedetailControllerCtrl = $controller('ServicedetailControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicedetailControllerCtrl.awesomeThings.length).toBe(3);
  });
});
