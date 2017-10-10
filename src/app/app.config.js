// @ngInject
export default function config($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
  });
}
