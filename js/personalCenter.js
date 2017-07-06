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
     ];

     //添加用户  
        $('.addAdmin').on('click', function () {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                area: ['40%', '75%'],
                skin: 'yourclass',
                content: $('#addAdmin')
            });
        })

        //修改
         $('.table-person').on('click', '.updateAdmin',function () {
            layer.open({
                type: 1,
                offset:'0.1rem',
                title: false,
                closeBtn: 0,
                shadeClose: true,
                area: ['40%', ''],
                skin: 'yourclass',
                content: $('#updateAdmin')
            });
        })

          //周期任务与否
    $scope.openOrClose = true;
    $scope.cirleTime = function () {
        if ($scope.openOrClose) {
            $('.circle-mission').css('background', 'url(../images/scan-button-open.png) no-repeat');
            $scope.openOrClose = false;
            $('.pwd-show').css("display","block")
        }
        else {
            $('.circle-mission').css('background', 'url(../images/scan-button-close.png) no-repeat');
            $scope.openOrClose = true;
            $('.pwd-show').css("display","none")
        }
    }
        
        

        $scope.closeAdd = function(){
            layer.closeAll()
        }
})