angular.module('glassbeamApp.task3', ['ui.router', 'ngStorage'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('task3', {
                'url' : '/task3',
                'params' : {},
                'templateUrl' : 'src/glassbeam/task3/task3.html',
                'controller' : 'task3Controller'
            });
    }])
    .controller('task3Controller', ['$scope', '$sessionStorage', '$state', function ($scope, $sessionStorage, $state) {
        $scope.data_set = [
            { 'name' : 'Gulfaraz', 'description': 'Awesome Guy' },
            { 'name' : 'Thamina', 'description': 'Awesome Gal' },
            { 'name' : 'Mohsin', 'description': 'Not so awesome Guy' }
        ];
        if($sessionStorage.data_set && $sessionStorage.data_set.length > 0) {
            $scope.data_set = angular.copy($sessionStorage.data_set);
        }
        $scope.save = function () {
            $sessionStorage.data_set = angular.copy($scope.data_set.filter(function (item) {
                if(!item.delete) {
                    delete item.delete;
                    return true;
                } else {
                    return false;
                }
            }));
	    $state.go('task3', {}, { 'reload' : true });
        };
    }]);
