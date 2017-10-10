export default class UsersController {

    // @ngInject
    constructor(objData, $ContentViewsService) {
        this.name = 'users';

        this.setData(objData);
        this.contentView = $ContentViewsService.getContentView(this.name);
    }

    setData(objData) {
        console.log(objData);
        this.array = objData['array'];
        this.total = objData['total'];
        this.status = objData['status'];

    }

}
