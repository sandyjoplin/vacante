'use strict';

/**
 * @ngdoc function
 * @name examenVacanteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examenVacanteApp
 */
angular.module('examenVacanteApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    /*para las tabs*/
    $scope.setTab = function (newTab) {
      $scope.tab = newTab;
    };
    $scope.isSet = function (tabNum) {
      return $scope.tab === tabNum;
    };
    /*paginacion*/

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pages = [];
    $scope.data = [{
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Esto_es_un_plan',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Esto_es_un_plan',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 99',
      intervalo: '120',
      ejecucion: '10 meses',
      estatus: 'Active'
    }, {
      nombre: 'Esto_es_un_plan',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 99',
      intervalo: '120',
      ejecucion: '10 meses',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 99',
      intervalo: '120',
      ejecucion: '10 meses',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 99',
      intervalo: '120',
      ejecucion: '10 meses',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'Super_Plan_Galactico',
      monto: 'MXN 9999',
      intervalo: '12',
      ejecucion: '1 mes',
      estatus: 'Active'
    }, {
      nombre: 'donativos',
      monto: 'MXN 99999999',
      intervalo: '120',
      ejecucion: '21 mes',
      estatus: 'Active'
    }, {
      nombre: 'donativos',
      monto: 'MXN 99999999',
      intervalo: '120',
      ejecucion: '21 mes',
      estatus: 'Active'
    }, {
      nombre: 'donativos',
      monto: 'MXN 999999999',
      intervalo: '120',
      ejecucion: '21 mes',
      estatus: 'Active'
    }, {
      nombre: 'donativos',
      monto: 'MXN 99999999',
      intervalo: '120',
      ejecucion: '21 mes',
      estatus: 'Active'
    }, {
        nombre: 'Super_Plan_Galactico',
        monto: 'MXN 9999',
        intervalo: '12',
        ejecucion: '1 mes',
        estatus: 'Active'
      }, {
        nombre: 'Super_Plan_Galactico',
        monto: 'MXN 9999',
        intervalo: '12',
        ejecucion: '1 mes',
        estatus: 'Active'
      }, {
        nombre: 'Super_Plan_Galactico',
        monto: 'MXN 9999',
        intervalo: '12',
        ejecucion: '1 mes',
        estatus: 'Active'
      }, {
        nombre: 'Super_Plan_Galactico',
        monto: 'MXN 9999',
        intervalo: '12',
        ejecucion: '1 mes',
        estatus: 'Active'
      }, {
        nombre: 'Super_Plan_Galactico',
        monto: 'MXN 9999',
        intervalo: '12',
        ejecucion: '1 mes',
        estatus: 'Active'
      }, {
        nombre: 'donativos',
        monto: 'MXN 99999999',
        intervalo: '120',
        ejecucion: '21 mes',
        estatus: 'Active'
      }, {
        nombre: 'donativos',
        monto: 'MXN 99999999',
        intervalo: '120',
        ejecucion: '21 mes',
        estatus: 'Active'
      }, {
        nombre: 'donativos',
        monto: 'MXN 999999999',
        intervalo: '120',
        ejecucion: '21 mes',
        estatus: 'Active'
      }, {
        nombre: 'donativos',
        monto: 'MXN 99999999',
        intervalo: '120',
        ejecucion: '21 mes',
        estatus: 'Active'
    }];

    $scope.configPages = function () {
      $scope.pages.length = 0;
      var ini = $scope.currentPage - 4;
      var fin = $scope.currentPage + 5;
      if (ini < 1) {
        ini = 1;
        if (Math.ceil($scope.data.length / $scope.pageSize) > 10) fin = 10;
        else fin = Math.ceil($scope.data.length / $scope.pageSize);
      } else {
        if (ini >= Math.ceil($scope.data.length / $scope.pageSize) - 10) {
          ini = Math.ceil($scope.data.length / $scope.pageSize) - 10;
          fin = Math.ceil($scope.data.length / $scope.pageSize);
        }
      }
      if (ini < 1) ini = 1;
      for (var i = ini; i <= fin; i++) {
        $scope.pages.push({ no: i });
      }
      if ($scope.currentPage >= $scope.pages.length)
        $scope.currentPage = $scope.pages.length - 1;
    };
    $scope.setPage = function (index) {
      $scope.currentPage = index - 1;
    };

    $scope.seleccionarDatos = function (id) {
      alert('Se hizo click en el dato: ' + id);
    };
  }
])
.filter('startFromGrid', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});
