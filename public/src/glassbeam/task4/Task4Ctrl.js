angular.module('glassbeamApp.task4', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('task4', {
                'url' : '/task4',
                'params' : {},
                'templateUrl' : 'src/glassbeam/task4/task4.html',
                'controller' : 'task4Controller'
            });
    }])
    .controller('task4Controller', ['$scope', 'api', '$stateParams', '$state', function ($scope, api, $stateParams, $state) {
        $scope.rows = [{ 'id' : 1, 'name' : 'Row1' }, { 'id' : 2, 'name' : 'Row2' }];
        $scope.columns = [{ 'id' : 1, 'name' : 'Column1' }, { 'id' : 2, 'name' : 'Column2' }];
        $scope.data_set = [
            { 'row_id': 1, 'column_id': 1, 'value': 'Alpha' },
            { 'row_id': 1, 'column_id': 2, 'value': 'Beta' },
            { 'row_id': 2, 'column_id': 1, 'value': 'Charlie' },
            { 'row_id': 2, 'column_id': 2, 'value': 'Delta' }
        ];
        $scope.orientation = true;
        $scope.transpose_table = function() {
            $scope.orientation = !$scope.orientation;
        };
        $scope.get_value = function(row_id, column_id) {
            for(var i=0; i<$scope.data_set.length; i++) {
                if($scope.data_set[i].row_id == row_id && $scope.data_set[i].column_id == column_id) {
                    return $scope.data_set[i].value;
                }
            }
            return null;
        };
    }]);
