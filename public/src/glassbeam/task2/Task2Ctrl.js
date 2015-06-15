angular.module('glassbeamApp.task2', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('task2', {
                'url' : '/task2',
                'params' : {},
                'templateUrl' : 'src/glassbeam/task2/task2.html',
                'controller' : 'task2Controller'
            });
    }])
    .controller('task2Controller', ['$scope', 'api', '$stateParams', '$state', function ($scope, api, $stateParams, $state) {
    }]);
