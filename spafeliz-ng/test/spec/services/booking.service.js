'use strict';

describe('Service: booking.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var booking.service;
  beforeEach(inject(function (_booking.service_) {
    booking.service = _booking.service_;
  }));

  it('should do something', function () {
    expect(!!booking.service).toBe(true);
  });

});
