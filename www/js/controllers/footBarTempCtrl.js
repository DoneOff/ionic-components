module.controller('footBarTempCtrl', function ($scope, $ionicActionSheet, $ionicTabsDelegate, $state, $ionicGesture,
    $ionicSideMenuDelegate) {

    $scope.submit = function () {
        $scope.data = "提交按钮被点击了。";
    };

    $scope.deny = function () {
        $scope.data = "驳回按钮被点击了。";
    };

    $scope.forward = function () {
        $scope.data = "转发按钮被点击了。";
    };

    $scope.save = function () {
        $scope.data = "保存按钮被点击了。";
    };

    $scope.instanceState = function () {
        $scope.data = "流程状态按钮被点击。";
    };

    $scope.show = function () {
        var hideSheet = $ionicActionSheet.show({
            buttons: $scope.actionButtons,
            buttonClicked: function (index, button) {
                $scope[button.Action]();
                return true;
            }
        });
    };

    //按钮属性配置
    $scope.hideButtons = [
        { Action: "forward", Icon: "ion-ios-redo-outline", Text: "转发", en_us: "Forward" },
        { Action: "save", Icon: "ion-compose", Text: "保存", en_us: "Save" },
        { Action: "instanceState", Icon: "ion-clock", Text: "流程状态", en_us: "InstanceState" },
        { Action: "submit", Icon: "ion-checkmark-round ", Text: "提交", en_us: "Submit" }
    ];

    //初始化按钮
    $scope.initButtons = function () {
        $scope.actionButtons = [];
        angular.forEach($scope.hideButtons, function (button, index, full) {
            var pbutton = {};
            pbutton.Action = button.Action;
            pbutton.text = '<div class="ionicActionSheet"><i class="padding ' + button.Icon + '"></i><span>' + button.Text + '</span></div>';
            $scope.actionButtons.push(pbutton)
        })
    };
    $scope.initButtons();

})