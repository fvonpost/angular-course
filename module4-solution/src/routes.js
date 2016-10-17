(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesComponentController as categoriesCtrl',
    resolve: {
        categoryItems: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });

  // Premade list page
  // .state('mainList', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  //   controller: 'MainShoppingListController as mainList'
  // });
}

})();
