module.controller('footBarTempCtrl', function ($scope, $ionicTabsDelegate, $state, $ionicGesture,
    $ionicSideMenuDelegate) {
        
    $scope.submit = function () {
        $scope.data = "提交按钮被点击了。";
    }

    $scope.deny = function () {
        $scope.data = "驳回按钮被点击了。";
    }
})