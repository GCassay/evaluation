// app-container.component.js
angular .module('app')
        .component('appContainer', {
          templateUrl: './components/app-container/app-container.template.html',
          controller: appController
});

function appController() {}
