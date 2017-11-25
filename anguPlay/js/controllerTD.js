"use strict";

console.log("controller linked.");

angular.module('tdApp', [])
.controller('tdController', function($scope)
{
  $scope.tasks = [];
  $scope.add = function()
  {
    $scope.tasks.push($scope.contentTitle);
  }
  $scope.delete = function()
  {
    $scope.tasks.splice(this.$index, 1);
  }
})
