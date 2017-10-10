import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'normalize.css'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppService from './app.service';
import ContentViewsService from './roles/services/content-views.service';


import routes from './app.routes';
import config from './app.config';


angular.module('app', [ uiRouter ])
    .service('$service', AppService)
    .service('$ContentViewsService', ContentViewsService)
    .config(config)
    .config(routes);
