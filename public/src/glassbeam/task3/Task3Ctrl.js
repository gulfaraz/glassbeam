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
    .controller('task3Controller', ['$scope', 'api', '$stateParams', '$state', '$localStorage', function ($scope, api, $stateParams, $state, $localStorage) {
        $scope.data_set = [
            { 'name' : 'Gulfaraz', 'description': 'Awesome Guy' },
            { 'name' : 'Thamina', 'description': 'Awesome Gal' },
            { 'name' : 'Mohsin', 'description': 'Not so awesome Guy' }
        ];
        if($localStorage.data_set && $localStorage.data_set.length > 0) {
            $scope.data_set = $localStorage.data_set;
        }
        $scope.save = function () {
            $localStorage.data_set = $scope.data_set;
        };
    }]);
