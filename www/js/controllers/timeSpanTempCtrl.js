module.controller('timeSpanTempCtrl', function ($scope, $ionicTabsDelegate, $state, $ionicGesture, $ionicActionSheet, $ionicPopup,
    $ionicSideMenuDelegate, $timeout) {
    $scope.timeSpan = {

    };

    $scope.showPopup = function () {
        $scope.data = $scope.timeSpan;
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/components/timeSpanTemp/popupTimeSpanTemp.html',
            title: '填写时间段',
            scope: $scope,
            cssClass: 'my-custom-popup',
            buttons: [
                {
                    text: '取消',
                    onTap: function (e) {
                        return $scope.data;
                    }
                },
                {
                    text: '<b>完成</b>',
                    type: 'button-balanced',
                    onTap: function (e) {
                        return $scope.data;
                    }
                }
            ]
        });

        myPopup.then(function (res) {
            $scope.timeSpan = res;
        });
    };

    //清除值
    $scope.focus = function (e) {

    }
})
