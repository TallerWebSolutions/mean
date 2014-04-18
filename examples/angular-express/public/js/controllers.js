'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('BeerIndexController', ['$scope', '$http', function ($scope, $http) {
    var url = 'api/beers';

    $scope.msg = 'Workshop Be MEAN';

    $http({
      method: 'GET',
      url: url
    }).
    success(function(data){
      console.log('Success');
      $scope.beers = data;
      $scope.msg = 'Beers List';
    }).
    error(function(err){
      console.log('Error:', err);
      $scope.msg = 'There is no beers to be listed';
    });
  }]);
