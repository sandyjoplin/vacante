'use strict';

describe('Controller: SuscripcionesCtrl', function () {

  // load the controller's module
  beforeEach(module('examenVacanteApp'));

  var SuscripcionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuscripcionesCtrl = $controller('SuscripcionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SuscripcionesCtrl.awesomeThings.length).toBe(3);
  });
});
