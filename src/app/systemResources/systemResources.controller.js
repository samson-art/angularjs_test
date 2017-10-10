export default class SystemResourcesController {

    // @ngInject
    constructor(objData, $ContentViewsService) {
        this.name = 'systemResources';

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
