angular.module('rsapp', [])

.controller("LineCtrl", function ($scope) {
  var data = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [

          {
              label: "My Second dataset",
              fillColor: "rgb(231, 76, 60)",
              strokeColor: "rgb(231, 76, 60)",
              pointColor: "rgb(231, 76, 60)",
              pointStrokeColor: "rgb(231, 76, 60)",
              pointHighlightFill: "rgb(231, 76, 60)",
              pointHighlightStroke: "rgb(231, 76, 60)",
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };
  var options = {
    ///Boolean - Whether grid lines are shown across the chart
scaleShowGridLines : false,

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

}]);
