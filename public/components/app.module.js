// app.module.js
angular .module('app', ['pascalprecht.translate'])
        .config(['$translateProvider', function ($translateProvider) {

          // Angular Translate
          $translateProvider.preferredLanguage('en');
          $translateProvider.registerAvailableLanguageKeys(['en', 'es'],{
            'en-*': 'en',
            'es-*': 'es'
          });
          $translateProvider.useStaticFilesLoader({
              prefix: './data/lang_',
              suffix: '.json'
          });
          $translateProvider.useSanitizeValueStrategy(null);
}]);
