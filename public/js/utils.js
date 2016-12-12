utils.provider('utils', Core);

Core.$inject = [];

function Core() {

    var provider = {};
    provider.$get = Factory;
    Factory.$inject = ['$q', '$http', '$rootScope','Logger', 'LocalStorage'];

    function Factory($q, $http, $rootScope,
        Logger, LocalStorage) {
        var service = {};

        service.Logger = Logger;
        service.init = init;
        service.localStorage = LocalStorage;
        service.callBackend = callBackend;
        
        function init() {
            Logger.debug("utils - init: start");
            Logger.debug("utils - init: end");
        }

        function callBackend(requestType, methodName, requestData, headers) {
            Logger.debug("utils - callBackend: start");

            var deferred = $q.defer();

            var req = {
                method: requestType,
                url: GOT.BACK_END.RootURL + methodName,
                headers: headers
            };

            Logger.debug("utils - callBackend: MethodType: " + req.method);
            Logger.debug("utils - callBackend: MethodName: " + methodName);
            Logger.debug("utils - callBackend: requestData: ");
            Logger.debug(requestData);

            $http(req).then(function (response) {
                Logger.debug("utils - callBackend: response: ");
                Logger.debug(response);

                deferred.resolve(response.data);
            }, function (error) {
                Logger.error(error);

                var errorResponse = {
                    success: false,
                    error: {}
                };

                if (error.status == 401) {
                    errorResponse.error.code = GOT.BACK_END.ERROR_CODES.UNAUTHORIZED;
                } else if (error.status == 500) {
                    errorResponse.error.code = GOT.BACK_END.ERROR_CODES.SERVERERROR;
                } else {
                    errorResponse.error.code = GOT.BACK_END.ERROR_CODES.NETWORK_ERROR;
                }

                deferred.reject(errorResponse);
            });

            Logger.debug("utils - callBackend: end");
            return deferred.promise;
        }

        return service;
    }
    
    return provider;
}
