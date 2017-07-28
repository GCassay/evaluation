// stats.component.js
angular .module('app')
        .component('stats', {
          templateUrl: './components/stats/stats.template.html',
          controller: statsController
});

function statsController($http) {

  var vm = this;
  vm.tab = 0;

  // Tab Controller
  vm.setTab = function(numTab) {
    vm.tab = numTab;
  };

  vm.isSetTab = function(numTab) {
    return vm.tab === numTab;
  };

  // Get JSON Chart Data
  vm.chartData = function() {

    $http({
       method: 'GET',
       url: './data/stats.json'
    }).then(function (success){

        vm.value = success.data[vm.tab].map( data => data.value );
        vm.color = success.data[vm.tab].map( data => data.color );
        vm.highlight = success.data[vm.tab].map( data => data.highlight );
        vm.label = success.data[vm.tab].map( data => data.label );

        chartConfig(vm.value, vm.label, vm.color, vm.highlight);
    },function (error){
      console.log("Error en la carga de datos.");
    });
  }

  // Chart Config
  function chartConfig(value, label, color, highlight) {
  var ctx = document.getElementById("diagram").getContext('2d');
  if(vm.diagram){ vm.diagram.destroy(); }
  vm.diagram = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: label,
          datasets: [{
              label: 'Usage',
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
