controllers.controller(GOT.CONTROLLERS.LandingController, LandingController);
controllers.controller(GOT.CONTROLLERS.ModalController, ModalController);

LandingController.$inject = ['utils', '$uibModal'];
ModalController.$inject = ['$uibModalInstance', 'battle'];

function LandingController(utils, $uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.battles = [];

    init();
    vm.onTap = onTap;

    function init() {
        utils.callBackend(GOT.BACK_END.RequestType.GET, GOT.BACK_END.MethodName.getBattles, {}, {})
            .then(function (response) {
                utils.Logger.debug(GOT.CONTROLLERS.LandingController + " :init - battles: ");
                utils.Logger.debug(response);
                vm.battles = response;
            }, function (error) {
                utils.Logger.debug(GOT.CONTROLLERS.LandingController + " :init - error: ");
                utils.Logger.error(error);
            });
    }

    function onTap(battle) {
        var modalInstance = $uibModal.open({
            templateUrl: 'templates/modal.html',
            controller: 'ModalController',
            controllerAs: 'vm',
            resolve: {
                battle: function() {
                    return battle;
                }
            }
        });
    }
}

function ModalController($uibModalInstance, battle) {
    /* jshint validthis: true */
    var vm = this;
    vm.battle = battle;
    vm.ok = ok;

    function ok() {
        $uibModalInstance.close();
    }
}