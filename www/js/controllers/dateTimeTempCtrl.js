module.controller('dateTimeTempCtrl', function($scope, $ionicTabsDelegate, $state, $ionicGesture,
    $ionicSideMenuDelegate) {
    $scope.dateValue = new Date();
    $scope.dateTimeValue = new Date();

    $scope.$watch("dateValue", function(n, o) {
        console.log(n);
        console.log(o);
    });
});