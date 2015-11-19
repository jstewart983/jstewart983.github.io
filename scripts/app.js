angular.module('rsapp', ['ngAnimate','ngTouch'])
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
