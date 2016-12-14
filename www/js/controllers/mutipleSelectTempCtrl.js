module.controller('mutipleSelectTempCtrl', function ($scope, $ionicActionSheet, $ionicTabsDelegate, $state, $ionicGesture,
    $ionicSideMenuDelegate) {
    $scope.click = function () {
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '桐生一马' },
                { text: '锦山彰' }
            ],
            buttonClicked: function (index, button) {
                return true;
            }
        });
    };
})