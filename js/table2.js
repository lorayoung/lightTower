var myChart = echarts.init(document.getElementById('tableright'));

option = {
    backgroundColor: '#f5f5f5',
    title: {
        text: 'Top10漏洞类型占比统计图',
        subtext: '漏洞个数（个）',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: '#383838' // 主标题文字颜色
        },
    },
    tooltip: {
        trigger: 'axis'
    },


    calculable: true,
    xAxis: [{
        axisLabel: {
            rotate: 35,
            interval :0
        },
        type: 'category',
        data: ['弱口令', 'SQL注入', 'DOS', '命令执行', '任意文件上传', '弱口令', 'SQL注入', 'DOS', '命令执行', '任意文件上传']
    }],
    yAxis: [{
        type: 'value',
        min: 0,
                 max: 180,
                 // interval: 6,
    }],
    grid: {
x: 40,
x2: 40,
y2: 70,
},
    series: [{
         barWidth : 30,
         itemStyle: {
                normal: {color: '#6cb559'}
            },
        name: '漏洞数',
        type: 'bar',
        data: [175,160,130,112,89,77,30,28,22,16],
        itemStyle:{ 
            normal:{ 
                color: '#6cb559',
                  label:{ 
                    show: true, 
                    position: 'top',
                    formatter: '{c}' 
                  }, 
                  labelLine :{show:true} 
                } 
            } 

        // itemStyle: {
        //     normal: {
        //         color: '#6cb559'
        //         },
        //         label: {
        //             show: true,
        //             position: 'top',
        //             formatter: '{b}\n{c}'
        //         }
        //     }
        // }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
