var addPlugins = angular.module('addPluginsCtrl', []);
addPlugins.controller('addPlugins', function addPlugins($scope) {
    //假数据
    $scope.pluginData = [
        {
            "pluginName": "ClassFish任意文件读取",
            "pluginCondition": "高危",
            "pluginDetail": [
                {
                    "pluginChildName": "XSS",
                    "pluginBugName": "远程溢出1",
                    "pluginBugState": "豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                    "affectVersion": "Apache Struts Version27",
                    "affectCom": "Apple Mac OS X",
                    "CVENum": "CVE 2017",
                    "boomDate": "2012年2月gggg9日",
                    "updateDate": "2012年2月9日 14：32",
                    "riskLevel": "",
                    "repireWay": "电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                }
            ]
        },
        {
            "pluginName": "ClassFish任意文件读取",
            "pluginCondition": "高危",
            "pluginDetail": [
                {
                    "pluginChildName": "XSS",
                    "pluginBugName": "远程溢出1",
                    "pluginBugState": "豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                    "affectVersion": "Apache Struts Version27",
                    "affectCom": "Apple Mac OS X",
                    "CVENum": "CVE 2017",
                    "boomDate": "2012年2月9日",
                    "updateDate": "2012年2月9日 14：32",
                    "riskLevel": "",
                    "repireWay": "电话撒极好的交换机和丰富dgyhdhd附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                }
            ]
        },
        {
            "pluginName": "ClassFish任意文件读取",
            "pluginCondition": "严重",
            "pluginDetail": [
                {
                    "pluginChildName": "XSS",
                    "pluginBugName": "远程溢出1",
                    "pluginBugState": "豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                    "affectVersion": "Apache Struts Version27",
                    "affectCom": "Apple Mac OS X",
                    "CVENum": "CVE 2017",
                    "boomDate": "2012年2月9日",
                    "updateDate": "2012年2月9日 14：32",
                    "riskLevel": "",
                    "repireWay": "电话撒极好的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                }
            ]
        },
        {
            "pluginName": "ClassFish任意文件读取",
            "pluginCondition": "严重",
            "pluginDetail": [
                {
                    "pluginChildName": "XSS",
                    "pluginBugName": "远程fg溢出1",
                    "pluginBugState": "豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                    "affectVersion": "Apache Struts Version27",
                    "affectCom": "Apple Mac OS X",
                    "CVENum": "CVE 2017",
                    "boomDate": "2012年2月9日",
                    "updateDate": "2012年2月9日 14：32",
                    "riskLevel": "",
                    "repireWay": "电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                }
            ]
        },
    ]
    $scope.bgc = "";
    $scope.bgcArr = [];
    for (var i = 0; i < $scope.pluginData.length; i++) {
        var level = $scope.pluginData[i].pluginCondition;
        (function () {


            if (level == "严重") {
                $scope.bgc = "red";
                $scope.bgcArr.push($scope.bgc);

            } else if (level == "高危") {
                $scope.bgc = "orange";
                $scope.bgcArr.push($scope.bgc);
            }
            else if (level == "中危") {
                $scope.bgc = "purple";
                $scope.bgcArr.push($scope.bgc);
            }
            else {
                $scope.bgc = "blue";
                $scope.bgcArr.push($scope.bgc);
            }

        }(i))

    }
    //弹层tab切换
    $scope.vm = {};

    //时间
    $scope.datePicker = function () {
        $('.dateset').datepicker();
    }

    //重置  
    $scope.reset = function () {
        $(':input', '.create-content')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

    }

    //
    $scope.showPlugin = function($index){
        //debugger
         if($(".plugin-detail-content-ul").eq($index).css("display")==='none'){
            $(".plugin-detail-content-ul").eq($index).slideDown();
            var ulbrothers = $(".plugin-detail-content-ul").eq($index).parent().siblings().children("ul");
            ulbrothers.slideUp();
        }
        else {
            $(".plugin-detail-content-ul").eq($index).slideUp()
        }
       
        
    }

    //
    $scope.delSpan = function($index){
         $scope.pluginData.splice($index,1);
         $scope.bgcArr.splice($index,1)
    }
    
})