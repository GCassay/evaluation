// usercard.component.js
angular .module('app')
        .component('usercard', {
          templateUrl: './components/usercard/usercard.template.html',
          controller: usercardController
});

function usercardController($http) {
  var vm = this;

  // Get JSON User Data
  (vm.translation = function() {

    $http({
       method: 'GET',
       url: './data/user.json'
    }).then(function (success){

        vm.name = success.data[1].name;
        vm.quote = success.data[1].quote;
        vm.avatar = success.data[1].avatar;
        vm.followers = success.data[1].followers;
        vm.views = success.data[1].views;
        vm.comments = success.data[1].comments;

    },function (error){
      console.log("Error en la carga de datos.");
    });
  })();
}
