export default class ContentViewsService {

    // @ngInject
    constructor() {
        this.contentViews = {
            roles: {
                type: 'table',
                tableName: 'roles',
                header: [
                    {th:'#'},
                    {th:'Роль'},
                    {th:'Комментарий'}
                ],
                columns: ['id', 'title', 'cmt']
            },
            users: {
                type: 'table',
                tableName: 'users',
                header: [
                    {th:'#'},
                    {th:'Имя пользователя'},
                    {th:'Комментарий'}
                ],
                columns: ['id', 'userName', 'cmt']
            },
            systemResources: {
                type: 'table',
                tableName: 'systemResources',
                header: [
                    {th:'#'},
                    {th: 'Заголовок'},
                    {th: 'Системное имя'},
                    {th: 'Чтение'},
                    {th: 'Редактирование'},
                    {th: 'Удаление'},
                    {th: 'Администрирование'}
                ],
                columns: ['id', 'title', 'sysName', 'readAction', 'updateAction', 'deleteAction', 'adminAction']
            }
        };
    }

    getContentView(name) {
        return this.contentViews[name];
    }


}
