angular.module('glassbeamApp.task1', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('task1', {
                'url' : '/task1',
                'params' : {},
                'templateUrl' : 'src/glassbeam/task1/task1.html',
                'controller' : 'task1Controller'
            });
    }])
    .controller('task1Controller', ['$scope', 'api', '$stateParams', '$state', function ($scope, api, $stateParams, $state) {
    }]);
