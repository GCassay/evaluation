// stats.component.js
angular .module('app')
        .component('stats', {
          templateUrl: './components/stats/stats.template.html',
          controller: statsController
});

function statsController($http) {

  var vm = this;
  vm.tab = 1;

  // Tab Controller
  vm.setTab = function(numTab) {
    vm.tab = numTab;
  };

  vm.isSetTab = function(numTab) {
    return vm.tab === numTab;
  };

  // Get JSON Chart Data
  (vm.translation = function() {

    $http({
       method: 'GET',
       url: './data/stats.json'
    }).then(function (success){

        vm.value = success.data.map( data => data.value );
        vm.color = success.data.map( data => data.color );
        vm.highlight = success.data.map( data => data.highlight );
        vm.label = success.data.map( data => data.label );

        chartConfig(vm.value, vm.label, vm.color, vm.highlight);
    },function (error){
      console.log("Error en la carga de datos.");
    });
  })();

  // Chart Config
  function chartConfig(value, label, color, highlight) {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: label,
          datasets: [{
              label: '# of Votes',
              data: value,
              backgroundColor: color,
              highlightColor: highlight,
              borderWidth: 0
          }]
      },
      options: {
        responsive: false,
        legend: {
          position: 'none',
        }
      }
  });
}
}
