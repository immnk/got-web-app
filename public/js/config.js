var GOT = {
    APP_NAME: "got",
    MODULE_NAMES: {
        CONTROLLERS: "got.controllers",
        FACTORIES: "got.factories",
        DIRECTIVES: "got.directives",
        FILTERS: "got.filters",
        UTILS: "got.utils",
        MESSAGES: "got.messages",
        CONSTANTS: "got.constants",
        LOGGER: "Logger",
        LOCAL_STORAGE: "LocalStorage"
    },
    CONTROLLERS: {
        LandingController: "LandingController",
        ModalController: "ModalController",
        AboutController: "AboutController"
    },
    FACTORIES: {
        Logger: "Logger",
        LocalStorage: "LocalStorage"
    },
    STATES: {
        LANDING: {
            name: 'landing',
            url: '/landing',
            templateUrl: 'templates/landing.html',
            controller: 'LandingController',
            cache: true
        },
        ABOUT: {
            name: 'about',
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
            cache: true
        }
    },
    BACK_END: {
        RootURL: "http://localhost:3300/",
        MethodName: {
            getBattles: "getBattles"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        },
        ERROR_CODES: {
            NETWORK_ERROR: "NETWORK_ERROR",
            UNAUTHORIZED: "UNAUTHORIZED",
            SERVERERROR: "SERVERERROR"
        }
    }
};

var controllers = angular.module(GOT.MODULE_NAMES.CONTROLLERS, []);
var factories = angular.module(GOT.MODULE_NAMES.FACTORIES, []);
var directives = angular.module(GOT.MODULE_NAMES.DIRECTIVES, []);
var filters = angular.module(GOT.MODULE_NAMES.FILTERS, []);
var utils = angular.module(GOT.MODULE_NAMES.UTILS, [GOT.MODULE_NAMES.LOGGER, GOT.MODULE_NAMES.LOCAL_STORAGE]);
var messages = angular.module(GOT.MODULE_NAMES.MESSAGES, []);
var constants = angular.module(GOT.MODULE_NAMES.CONSTANTS, []);
var logger = angular.module(GOT.MODULE_NAMES.LOGGER, []);
var localStorage = angular.module(GOT.MODULE_NAMES.LOCAL_STORAGE, []);
