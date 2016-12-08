var module = angular.module('starter.controllers', [])
  .controller("mainCtrl", function ($rootScope,$scope, $state, $http, $ionicPopup, $ionicSideMenuDelegate, $ionicPlatform, $ionicTabsDelegate) {
        console.log("主程序启动....");
        $scope.GoBack = function(){
          $state.go('home');
        }
  })