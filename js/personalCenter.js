var personalCenter = angular.module('personalCenterCtrl', []);
personalCenter.controller('personalCenter', function personalCenter($scope, $http, $filter) {
     //假数据
     $scope.personData = [
         {
             "administrator":"admin",
             "department":"研发部",
             "telephone":"39393822920",
             "email":"39393822920@qq.com"
         },
         {
             "administrator":"admin",
             "department":"研发部",
             "telephone":"39393822920",
             "email":"39393822920@qq.com"
         },
         {
             "administrator":"admin",
             "department":"研发部",
             "telephone":"39393822920",
             "email":"39393822920@qq.com"
         },
         {
             "administrator":"admin",
             "department":"研发部",
             "telephone":"39393822920",
             "email":"39393822920@qq.com"
         }
     ]
})