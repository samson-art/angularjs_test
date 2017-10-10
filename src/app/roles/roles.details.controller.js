export default class RolesDetailsController {

    // @ngInject
    constructor($state, $stateParams) {
        this.tabs = [
            {
                title: 'Пользователи',
                name: 'users'
            },
            {
                title: 'Системные ресурсы',
                name: 'systemResources'
            }
        ];

        this._state = $state;
        this._stateParams = $stateParams;

        this.selectedTabName = $state.current.data['tabName'];
    }

    tabClicked(tabName) {
        this.selectedTabName = tabName;
        this._state.go('root.roles.view.detail.'+tabName, {roleId: this._stateParams['roleId']});
    }

}
