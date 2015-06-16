angular.module('glassbeamApp.task1', ['ui.router', 'ngTable'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('task1', {
                'url' : '/task1',
                'params' : {},
                'templateUrl' : 'src/glassbeam/task1/task1.html',
                'controller' : 'task1Controller'
            });
    }])
    .controller('task1Controller', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
        var data_set = [
            { 'name' : "Moroni", 'age': 50, 'description': 'Great' },
            { 'name' : "Tiancum", 'age': 43, 'description': 'Not so great' },
            { 'name' : "Jacob", 'age': 27, 'description': 'Fun' },
            { 'name' : "Nephi", 'age': 29, 'description': 'Not so fun' },
            { 'name' : "Enos", 'age': 34, 'description': 'Great and fun' },
            { 'name' : "Moronica", 'age': 60, 'description': 'Great' },
            { 'name' : "Tiancumca", 'age': 53, 'description': 'Not so great' },
            { 'name' : "Jacobca", 'age': 37, 'description': 'Fun' },
            { 'name' : "Nephica", 'age': 39, 'description': 'Not so fun' },
            { 'name' : "Enosca", 'age': 44, 'description': 'Great and fun' },
            { 'name' : "Moroniam", 'age': 40, 'description': 'Great' },
            { 'name' : "Tiancumam", 'age': 33, 'description': 'Not so great' },
            { 'name' : "Jacobam", 'age': 17, 'description': 'Fun' },
            { 'name' : "Nephiam", 'age': 19, 'description': 'Not so fun' },
            { 'name' : "Enosam", 'age': 24, 'description': 'Great and fun' },
            { 'name' : "Aiancum", 'age': 43, 'description': 'Not so great' },
            { 'name' : "Aacob", 'age': 27, 'description': 'Fun' },
            { 'name' : "Aephi", 'age': 29, 'description': 'Not so fun' },
            { 'name' : "Anos", 'age': 34, 'description': 'Great and fun' },
            { 'name' : "Aoronica", 'age': 60, 'description': 'Great' },
            { 'name' : "Aiancumca", 'age': 53, 'description': 'Not so great' },
            { 'name' : "Aacobca", 'age': 37, 'description': 'Fun' },
            { 'name' : "Aephica", 'age': 39, 'description': 'Not so fun' },
            { 'name' : "Anosca", 'age': 44, 'description': 'Great and fun' },
            { 'name' : "Aoroniam", 'age': 40, 'description': 'Great' },
            { 'name' : "Aiancumam", 'age': 33, 'description': 'Not so great' },
            { 'name' : "Aacobam", 'age': 17, 'description': 'Fun' },
            { 'name' : "Aephiam", 'age': 19, 'description': 'Not so fun' },
            { 'name' : "Biancum", 'age': 43, 'description': 'Not so great' },
            { 'name' : "Bacob", 'age': 27, 'description': 'Fun' },
            { 'name' : "Bephi", 'age': 29, 'description': 'Not so fun' },
            { 'name' : "Bnos", 'age': 34, 'description': 'Great and fun' },
            { 'name' : "Boronica", 'age': 60, 'description': 'Great' },
            { 'name' : "Biancumca", 'age': 53, 'description': 'Not so great' },
            { 'name' : "Bacobca", 'age': 37, 'description': 'Fun' },
            { 'name' : "Bephica", 'age': 39, 'description': 'Not so fun' },
            { 'name' : "Bnosca", 'age': 44, 'description': 'Great and fun' },
            { 'name' : "Boroniam", 'age': 40, 'description': 'Great' },
            { 'name' : "Biancumam", 'age': 33, 'description': 'Not so great' },
            { 'name' : "Bacobam", 'age': 17, 'description': 'Fun' },
            { 'name' : "Bephiam", 'age': 19, 'description': 'Not so fun' },
            { 'name' : "Ciancum", 'age': 43, 'description': 'Not so great' },
            { 'name' : "Cacob", 'age': 27, 'description': 'Fun' },
            { 'name' : "Cephi", 'age': 29, 'description': 'Not so fun' },
            { 'name' : "Cnos", 'age': 34, 'description': 'Great and fun' },
            { 'name' : "Coronica", 'age': 60, 'description': 'Great' },
            { 'name' : "Ciancumca", 'age': 53, 'description': 'Not so great' },
            { 'name' : "Cacobca", 'age': 37, 'description': 'Fun' },
            { 'name' : "Cephica", 'age': 39, 'description': 'Not so fun' },
            { 'name' : "Cnosca", 'age': 44, 'description': 'Great and fun' },
            { 'name' : "Coroniam", 'age': 40, 'description': 'Great' },
            { 'name' : "Ciancumam", 'age': 33, 'description': 'Not so great' },
            { 'name' : "Cacobam", 'age': 17, 'description': 'Fun' },
            { 'name' : "Cephiam", 'age': 19, 'description': 'Not so fun' }
        ];
        $scope.table_params = new ngTableParams({
            'page' : 1,
            'count' : 10,
            'sorting' : {
                'name': 'asc'
            },
            'filter' : {}
        }, {
            'total' : data_set.length,
            'getData' : function ($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data_set, params.filter()) : data_set;
                params.total(filteredData.length);
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;
                var data_subset = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                $defer.resolve(data_subset);
            }
        });
    }]);
