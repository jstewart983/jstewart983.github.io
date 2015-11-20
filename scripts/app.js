angular.module('rsapp', ['ngAnimate','chart.js'])

.config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    colours: ['#E74C3C', '#E74C3C'],
    responsive: true
  });
}])
.controller("LineCtrl", function ($scope) {

  $scope.labels = ["", "", "", "", "", "", ""];
  $scope.series = [''];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
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
