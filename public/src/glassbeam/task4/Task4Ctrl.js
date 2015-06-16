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
    .controller('task4Controller', ['$scope', function ($scope) {
        $scope.rows = [{ 'id' : 1, 'name' : 'Row1' }, { 'id' : 2, 'name' : 'Row2' }, { 'id' : 3, 'name' : 'Row3' }];
        $scope.columns = [{ 'id' : 1, 'name' : 'Column1' }, { 'id' : 2, 'name' : 'Column2' }, { 'id' : 3, 'name' : 'Column3' }];
        $scope.data_set = [
            { 'row_id': 1, 'column_id': 1, 'value': 'Alpha' },
            { 'row_id': 1, 'column_id': 2, 'value': 'Bravo' },
            { 'row_id': 1, 'column_id': 3, 'value': 'Charlie' },
            { 'row_id': 2, 'column_id': 1, 'value': 'Delta' },
            { 'row_id': 2, 'column_id': 2, 'value': 'Echo' },
            { 'row_id': 2, 'column_id': 3, 'value': 'Foxtrot' },
            { 'row_id': 3, 'column_id': 1, 'value': 'Golf' },
            { 'row_id': 3, 'column_id': 2, 'value': 'Hotel' },
            { 'row_id': 3, 'column_id': 3, 'value': 'India' }
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
