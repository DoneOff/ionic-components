module.factory('mutipleSelectService', function(httpService) {

    return {
        getDept: function(obj, id) {
            var depts = {};
            var getDept = function(obj, id) {
                var success = false;
                if (obj.children) {
                    obj.children.forEach(function(n, i) {
                        if (n.id == id) {
                            success = true;
                            depts = n;
                        }
                    });
                    if (!success) {
                        obj.children.forEach(function(n, i) {
                            getDept(n, id);
                        });
                    }
                }
            };
            getDept(obj, id);
            return depts;
        },
        removeItem: function(arry, obj) {
            arry.forEach(function(n, i) {
                if (n.id == obj.id) {
                    items = arry.splice(i, 1);
                }
            });
            return arry;
        },
        getSelectedName: function(items) {
            var names = '已选：';
            if (items.length < 3) {
                items.forEach(function(n, i) {
                    names += n.name + '、';
                });
                names = names.substring(0, names.length - 1);
            } else {
                for (var i = 0; i < 2; i++) {
                    names += items[i].name + '、';
                }
                names = names.substring(0, names.length - 1);
                names += '...等人';
                // names += items[0].name + '、' + items[1].name + '...等人';
            }
            return names;
        },
        getAll: function(url, param) {
            // var path = "";
            return httpService.get(url, param);
        }
    };
});