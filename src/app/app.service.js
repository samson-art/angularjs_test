export default class AppSevice {
    // @ngInject
    constructor($http) {
        this._$http = $http;
    }

    getRoles() {
        return this.getData('roles', {});
    }

    getUsersByRoleId(roleId) {
        return this.getData('users', {roleId: roleId});
    }

    getSystemResourcesByRoleId(roleId) {
        return this.getData('systemResources', {roleId: roleId});
    }

    getData(name, filter) {
        return this._$http.post('http://localhost:8080/api/' + name + '/get', filter).then(
            function successCallback(response) {
                console.log(response);
                return {
                    array: response.data.data.array,
                    total: response.data.data.total,
                    status: response.status
                };
            },
            function errorCallback(response) {
                console.log(response);
                return {
                    array: response.data.data.array,
                    total: response.data.data.total,
                    status: response.status
                };
            }
        );
    }


}
