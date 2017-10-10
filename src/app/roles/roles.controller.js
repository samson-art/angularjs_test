export default class RolesController {

    // @ngInject
    constructor($service, objData, $ContentViewsService, $state) {
        this.name = 'roles';
        this.title = 'Список ролей';
        this.selectedRoleId = null;

        this._service = $service;
        this._state = $state;

        this.setData(objData);
        this.contentView = $ContentViewsService.getContentView(this.name);
    }

    setData(objData) {
        console.log(objData);
        this.array = objData['array'];
        this.total = objData['total'];
        this.status = objData['status'];

    }

    roleClicked(roleId) {
        if (roleId === this.selectedRoleId) {
            this.selectedRoleId = null;
            this._state.go('root.roles.view');
        } else {
            this.selectedRoleId = roleId;
            let state = this._state.current.name;
            if (state !== 'root.roles.view') {
                this._state.go(state, {roleId: roleId});
            } else {
                this._state.go('root.roles.view.detail.users', {roleId: roleId});
        }

        }

    }

}
