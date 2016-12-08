// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform, $location, $timeout, $rootScope,
     $ionicHistory, $state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//.constant('$ionicLoadingConfig', {
//    template: "<ion-spinner icon=\"bubbles\" class=\"spinner-balanced\"></ion-spinner>"
//})
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // 修改默认显示效果
    // $ionicConfigProvider.platform.ios.tabs.style("standard");
    // $ionicConfigProvider.platform.ios.tabs.position("bottom");
    $ionicConfigProvider.platform.android.tabs.style("standard");
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    // $ionicConfigProvider.platform.ios.navBar.alignTitle("center");
    $ionicConfigProvider.platform.android.navBar.alignTitle("center");
    // 设置返回文本为空和箭头图标  // previousTitleText("")
    //$ionicConfigProvider.platform.ios.backButton.icon("ion-android-arrow-back");//ion-ios-arrow-thin-left
    //$ionicConfigProvider.platform.android.backButton.icon("ion-android-arrow-back");

    $ionicConfigProvider.backButton.previousTitleText(false).text("").icon("ion-android-arrow-back");

    $ionicConfigProvider.platform.ios.views.transition("ios");
    $ionicConfigProvider.platform.android.views.transition("android");

    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html'
    })
    .state('textTemp', {
        url: '/textTemp',
        templateUrl: 'templates/componenets/textTemp.html',
        controller: 'textTempCtrl'
    })
    .state('checkBoxTemp', {
        url: '/checkBoxTemp',
        templateUrl: 'templates/componenets/checkBoxTemp.html',
        controller: 'checkBoxTempCtrl'
    })
    .state('radioButtonTemp', {
        url: '/radioButtonTemp',
        templateUrl: 'templates/componenets/radioButtonTemp.html',
        controller: 'radioButtonTempCtrl'
    })
    .state('selectTemp', {
        url: '/selectTemp',
        templateUrl: 'templates/componenets/selectTemp.html',
        controller: 'selectTempCtrl'
    })
    // $urlRouterProvider.otherwise("/home");
})
