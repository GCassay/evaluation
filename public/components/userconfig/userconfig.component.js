// userconfig.component.js
angular .module('app')
        .component('userconfig', {
          templateUrl: './components/userconfig/userconfig.template.html',
          controller: userconfigController
});

function userconfigController($scope,$translate) {
  // Switch Language Func
  $scope.changeLanguage = function(lang){
      $translate.use(lang);
  }
}
