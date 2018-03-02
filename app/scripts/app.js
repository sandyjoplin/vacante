'use strict';

/**
 * @ngdoc overview
 * @name examenVacanteApp
 * @description
 * # examenVacanteApp
 *
 * Main module of the application.
 */
angular
  .module('examenVacanteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/personas', {
        templateUrl: 'views/personas.html',
        controller: 'PersonasCtrl',
        controllerAs: 'personas'
      })
      .when('/transacciones', {
        templateUrl: 'views/transacciones.html',
        controller: 'TransaccionesCtrl',
        controllerAs: 'transacciones'
      })
      .when('/suscripciones', {
        templateUrl: 'views/suscripciones.html',
        controller: 'SuscripcionesCtrl',
        controllerAs: 'suscripciones'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
