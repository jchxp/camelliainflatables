(function($) {
  'use strict';
  $(function() {
    if ($('#myChart').length) {
      var onlineRevenueCanvas = $("#myChart").get(0).getContext("2d");

      var gradient2 = onlineRevenueCanvas.createLinearGradient(0, 0, 0, 300);
      gradient2.addColorStop(0, 'rgba(159, 98, 219, .3)');
      gradient2.addColorStop(1, 'rgba(159, 98, 219, .0)');

      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'Online Revenue',
            data: [200, 450, 250, 480, 250 , 450, 300, 450, 300, 450, 250, 480],
            borderColor: [
              '#9F62DB'
            ],
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient2,
            strokeColor : "#9F62DB",
            pointColor : "#9F62DB",
            pointStrokeColor : "#9F62DB",
            pointBackgroundColor: "#9F62DB",
            pointRadius: 3,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: "#9F62DB",
            pointBorderColor: 'transparent',
          }

        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
              lineWidth: 1,
              color: "#f1f3f9",
              zeroLineColor: "#f1f3f9",
            },
            ticks: {
              min: 100,
              max: 500,
              stepSize: 100,
              fontColor: "#979797",
              fontSize: 11,
              fontStyle: 400,
              padding: 15
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks : {
              fontColor: "#979797",
              fontSize: 11,
              fontStyle: 400,
              padding: 15,
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        elements: {
          line :{
            tension: .4
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 10,
            bottom : 10,
            left : 10,
            right: 10
          }
        }
      };
      var onlineRevenue = new Chart(onlineRevenueCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('myChart').innerHTML = onlineRevenue.generateLegend();
    }

  });
})(jQuery);