angular.module(GOT.APP_NAME, ['ui.router', 'ui.bootstrap', 'ui.bootstrap.collapse', 'ui.bootstrap.tpls',
    GOT.MODULE_NAMES.CONTROLLERS, GOT.MODULE_NAMES.FACTORIES, GOT.MODULE_NAMES.UTILS,
    GOT.MODULE_NAMES.DIRECTIVES, GOT.MODULE_NAMES.FILTERS
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('in config function');

    $stateProvider
        .state(GOT.STATES.LANDING.name, {
            url: GOT.STATES.LANDING.url,
            templateUrl: GOT.STATES.LANDING.templateUrl,
            controller: GOT.STATES.LANDING.controller,
            controllerAs: "vm",
            cache: GOT.STATES.LANDING.cache
        })
        .state(GOT.STATES.ABOUT.name, {
            url: GOT.STATES.ABOUT.url,
            templateUrl: GOT.STATES.ABOUT.templateUrl,
            controller: GOT.STATES.ABOUT.controller,
            cache: GOT.STATES.ABOUT.cache
        })
    $urlRouterProvider.otherwise('/landing');
});
