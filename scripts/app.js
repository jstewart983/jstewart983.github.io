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
  var options = {};
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
