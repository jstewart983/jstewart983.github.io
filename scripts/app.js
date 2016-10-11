angular.module('rsapp', [])

.controller("LineCtrl", function ($scope) {

  var num = Math.floor(Math.random() * 100) + 20;
  var arrayNum = Math.floor(Math.random() * 6) + 0;
  var colorNum = Math.floor(Math.random() * 4) + 0;
  var colorArray = ['#2ECC71','#3498DB','#F1C40F','#E74C3C'];

  var data = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [

          {
              label: "",
              fillColor: colorArray[colorNum],
              strokeColor: colorArray[colorNum],
              pointColor: colorArray[colorNum],
              pointStrokeColor: colorArray[colorNum],
              pointHighlightFill: colorArray[colorNum],
              pointHighlightStroke: colorArray[colorNum],
              data: [Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20, Math.floor(Math.random() * 100) + 20]
          }
      ]
  };
  var options = {
    ///Boolean - Whether grid lines are shown across the chart
scaleShowGridLines : false,

responsive: true,

//String - Colour of the grid lines
scaleGridLineColor : "#fff",

//Number - Width of the grid lines
scaleGridLineWidth : 1,

//Boolean - Whether to show horizontal lines (except X axis)
scaleShowHorizontalLines: false,

//Boolean - Whether to show vertical lines (except Y axis)
scaleShowVerticalLines: false,

//Boolean - Whether the line is curved between points
bezierCurve : true,

//Number - Tension of the bezier curve between points
bezierCurveTension : 0.4,

//Boolean - Whether to show a dot for each point
pointDot : false,

//Number - Radius of each point dot in pixels
pointDotRadius : 4,

//Number - Pixel width of point dot stroke
pointDotStrokeWidth : 1,

//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius : 20,

//Boolean - Whether to show a stroke for datasets
datasetStroke : true,

//Number - Pixel width of dataset stroke
datasetStrokeWidth : 2,

//Boolean - Whether to fill the dataset with a colour
datasetFill : true,
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  var myLineChart = new Chart(ctx).Line(data, options);



  var data = {
      labels: ["jQuery", "PHP", "Nodejs", "Javascript","Bootstrap" , "CSS", "HTML", "SQL", "Angularjs","MySQL"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "#2ECC71",
              strokeColor: "#2ECC71",
              pointColor: "#2ECC71",
              pointStrokeColor: "#2ECC71",
              pointHighlightFill: "#2ECC71",
              pointHighlightStroke: "#2ECC71",
              data: [6, 6, 3, 6, 7, 5, 7,6,6,5]
          }

      ]
  };

  var ctx = document.getElementById("radarChart").getContext("2d");
  var myRadarChart = new Chart(ctx).Radar(data, options);





$('#contact-section').on('click',function(){
  //#2ECC71
  console.log('hey');
  var data = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [

            {
              label: "My Second dataset",
              fillColor: "#2ECC71",
              strokeColor: "#2ECC71",
              pointColor: "#2ECC71",
              pointStrokeColor: "#2ECC71",
              pointHighlightFill: "#2ECC71",
              pointHighlightStroke: "#2ECC71",
              data: [68, 18, 40, 39, 86, 27, 20]
            }
        ]
    };
    myLineChart.datasets[0].points[arrayNum].value = num;
    myLineChart.update();

  });
  $('#resume-section').on('click',function(){
    //#2ECC71
    console.log('hey');
    var data = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [

              {
                label: "My Second dataset",
                fillColor: "#2ECC71",
                strokeColor: "#2ECC71",
                pointColor: "#2ECC71",
                pointStrokeColor: "#2ECC71",
                pointHighlightFill: "#2ECC71",
                pointHighlightStroke: "#2ECC71",
                data: [68, 18, 40, 39, 86, 27, 20]
              }
          ]
      };
      myLineChart.datasets[0].points[arrayNum].value = num;
      myLineChart.update();

    });
    $('#about-section').on('click',function(){
      //#2ECC71
      console.log('hey');
      var data = {
          labels: ["", "", "", "", "", "", ""],
          datasets: [

                {
                  label: "My Second dataset",
                  fillColor: "#2ECC71",
                  strokeColor: "#2ECC71",
                  pointColor: "#2ECC71",
                  pointStrokeColor: "#2ECC71",
                  pointHighlightFill: "#2ECC71",
                  pointHighlightStroke: "#2ECC71",
                  data: [68, 18, 40, 39, 86, 27, 20]
                }
            ]
        };
        myLineChart.datasets[0].points[arrayNum].value = num;
        myLineChart.update();

      });
      $('#work-section').on('click',function(){
        //#2ECC71
        console.log('hey');
        var data = {
            labels: ["", "", "", "", "", "", ""],
            datasets: [

                  {
                    label: "My Second dataset",
                    fillColor: "#2ECC71",
                    strokeColor: "#2ECC71",
                    pointColor: "#2ECC71",
                    pointStrokeColor: "#2ECC71",
                    pointHighlightFill: "#2ECC71",
                    pointHighlightStroke: "#2ECC71",
                    data: [68, 18, 40, 39, 86, 27, 20]
                  }
              ]
          };
          myLineChart.datasets[0].points[arrayNum].value = num;
          myLineChart.update();

        });
})

.controller('websiteCtrl', [function() {
  new WOW().init();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});
$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

}]);
