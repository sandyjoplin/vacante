'use strict';

describe('Controller: TransaccionesCtrl', function () {

  // load the controller's module
  beforeEach(module('examenVacanteApp'));

  var TransaccionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaccionesCtrl = $controller('TransaccionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransaccionesCtrl.awesomeThings.length).toBe(3);
  });
});
