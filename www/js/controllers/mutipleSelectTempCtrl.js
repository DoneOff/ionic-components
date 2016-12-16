module.controller('mutipleSelectTempCtrl', function ($scope, $ionicActionSheet, $ionicTabsDelegate, $state, $ionicGesture,
    $ionicSideMenuDelegate) {
    //组织数据
    var organization = {
        id: '1',
        pid: null,
        deptName: '我的公司',
        isLeaf: false,
        checked: true,
        children: [
            {
                id: '2',
                pid: '1',
                deptName: '产品中心',
                isLeaf: true,
                children: null,
                checked: false,
                users: [
                    { id: '4', name: '关羽' },
                    { id: '5', name: '赵云' },
                    { id: '6', name: '马超' }
                ]
            },
            {
                id: '3',
                pid: '1',
                deptName: '企管中心',
                isLeaf: true,
                children: null,
                checked: false,
                users: [
                    { id: '7', name: '黄忠' },
                    { id: '8', name: '张飞' }
                ]
            },
            {
                id: '4',
                pid: '1',
                deptName: '营销中心',
                isLeaf: false,
                checked: false,
                children: [
                    {
                        id: '5',
                        pid: '4',
                        deptName: '营销部',
                        isLeaf: false,
                        children: [
                            {
                                id: '7',
                                pid: '4',
                                deptName: '营销部',
                                isLeaf: true,
                                children: null,
                                checked: false,
                                users: [
                                    { id: '4', name: '曹仁' },
                                    { id: '5', name: '曹丕' },
                                    { id: '6', name: '曹植' }
                                ]
                            }],
                        checked: false,
                        users: [
                            { id: '4', name: '荀彧' },
                            { id: '5', name: '司马懿' },
                            { id: '6', name: '司马昭' }
                        ]
                    },
                    {
                        id: '6',
                        pid: '4',
                        deptName: '销售部',
                        isLeaf: true,
                        children: null,
                        checked: false,
                        users: [
                            { id: '7', name: '孙尚香' },
                            { id: '8', name: '大乔' },
                            { id: '9', name: '小乔' }
                        ]
                    },
                ],
                users: [
                    { id: '10', name: '马谡' },
                    { id: '11', name: '魏延' },
                ]
            }
        ],
        users: [
            { id: '1', name: '曹操' },
            { id: '2', name: '刘备' },
            { id: '3', name: '孙权' }
        ]
    };
    //部门导航
    $scope.deptNav = [];
    // 根部门
    var rootNav = {
        id: organization.id,
        name: organization.deptName,
        isLeaf: organization.isLeaf,
        pid: organization.pid
    };
    $scope.deptNav.push(rootNav);
    //当前部门用户
    var currentUsers = [];
    //页面绑定数据
    $scope.data = organization;
    //已选
    $scope.items = [];
    //已选
    $scope.selected = function () {
        var hideSheet = $ionicActionSheet.show({
            buttons: $scope.items,
            buttonClicked: function (index, button) {
                return true;
            }
        });
    };

    //部门点击事件
    $scope.deptClick = function (index) {
        if (currentUsers.length < $scope.deptNav.length) {
            currentUsers.push($scope.data.users);
        }
        $scope.data.users = $scope.data.children[index].users;
        $scope.data.children[index].checked = true;
    }

    //加载子部门
    $scope.showChild = function (index) {
        if (currentUsers.length < $scope.deptNav.length) {
            currentUsers.push($scope.data.users);
        }
        if (!$scope.data.isLeaf) {
            $scope.data = $scope.data.children[index];
            var childNav = {
                id: $scope.data.id,
                name: $scope.data.deptName,
                isLeaf: $scope.data.isLeaf,
                pid: $scope.data.pid
            };
            $scope.deptNav.push(childNav);
        }
    }
    //添加
    $scope.addItem = function (item) {
        var i = {
            text: item.name
        };
        $scope.items.push(i);
    }
    //部门导航点击事件
    $scope.navClick = function (deptId, index) {
        if (deptId == rootNav.id) {
            $scope.data = organization;
        } else {
            getDept(organization, deptId);
        };
        if (currentUsers.length == $scope.deptNav.length)
            $scope.data.users = currentUsers[index];
        $scope.data.children.forEach(function (n, i) {
            n.checked = false;
        });
        $scope.deptNav = $scope.deptNav.slice(0, index + 1);
    }
    //获取部门数据
    var getDept = function (obj, id) {
        var success = false;
        if (obj.children) {
            obj.children.forEach(function (n, i) {
                if (n.id == id) {
                    $scope.data = n;
                    success = true;
                }
            });
            if (!success) {
                obj.children.forEach(function (n, i) {
                    getDept(n, n.id);
                });
            }
        }
    }

})