var app = angular.module('routeApp');

app.controller('ShowController',function(){
  console.log('show controller loaded');

  var show = this;

  show.moreAbout = false;

  show.nowShow = function(){
    show.moreAbout = !show.moreAbout;
  }
});
