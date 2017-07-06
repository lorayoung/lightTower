var myChart = echarts.init(document.getElementById('tableleft'));

option = {
  backgroundColor: '#f5f5f5',
    title : {
        text: '目标漏洞等级分布图',
        x:'left',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: '#383838'          // 主标题文字颜色
        },
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#f0595c', '#ffb31f','#9d55ff','#0caee6'],
    legend: {
        orient: 'vertical',
        right: 'right',
        data: ['严重','高危','中危','低危']
    },
    series : [
        {
            name: '漏洞详情',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'严重'},
                {value:310, name:'高危'},
                {value:234, name:'中危'},
                {value:135, name:'低危'}
 
            ],
            itemStyle: {
                  normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{d}%' 
                  }, 
                  labelLine :{show:true} 
                } ,

                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
