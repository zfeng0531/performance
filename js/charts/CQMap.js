// 重庆地图配置
var cqMapOption = {
    // 标题 可做成超链接
    title: [{
        text: '发展量占比',
        left: '69%',
        top: '2%',
        z: 20
    }, {
        text: "区域总额近6个月趋势图",
        left: '66%',
        top: '45%',
        z: 20
    }],
    tooltip: {},
    //	 图例
    legend: [/*{
		data: {
			name: 'mapChart',
			icon: 'circle'
		},
		left: 'center',
		bottom: '1%'
		//		show: false
	}, */{
        data: [{
            name: '量/收/毛利'
        }, {
            name: '量/收/毛利占比'
        }],
        //		selectedMode: false,
        right: '18%',
        bottom: '1%'
    }],
    // 视觉映射
    visualMap: [{
        type: 'piecewise',
        seriesIndex: 0,
        z: 20,
        splitNumber: 5, //分段数
        //			pieces: [{ min: 300 }, { min: 200, max: 300 }, { min: 100, max: 200 }, { min: 10, max: 100 } ],
        //			minOpen: true,
        maxOpen: true,
        //			selectedMode: 'single',
        itemWidth: 30,
        inRange: {
            color: ['yellow', 'red']
        }, //选中部分映射效果
        outOfRange: {
            color: ['#aaa']
        } //未选中部分映射效果
    },
        /*{
            show: false,
            type: 'piecewise',
            seriesIndex: 1,
            z: 20,
            inverse: false,
            pieces: [{ min: 300 }, { min: 200, max: 300 }, { min: 100, max: 200 }, { min: 10, max: 100 } ],
            minOpen: true,
            maxOpen: true,
            outOfRange: { color: ['yellow', 'red'] }
        }*/
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            min: 0,
            max: 32,
            calculable: true,
            inRange: {
                color: ['yellow', 'red']
            },
            textStyle: {
                color: '#fff'
            }
        }
    ],
    // 坐标系
    grid: [{
        right: '40%',
        bottom: 40,
        width: 100,
        height: '55%',
        zlevel: 20
    },
        {
            right: '17%',
            bottom: 70,
            width: '20%',
            height: '35%',
            zlevel: 20
        }
    ],

    xAxis: [{
        type: 'value',
        gridIndex: 0,
        scale: true,
        position: 'top',
        boundaryGap: false,
        scale: true,
        z: 20,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        zlevel: 20
    }, {
        type: 'category',
        gridIndex: 1,
        splitNumber: 5,
        z: 20,
        axisLabel: {},
        data: ['三月', '四月', '五月', '六月', '七月', '八月']
    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        position: 'left',
        name: '地区排名',
        nameLocation: 'start',
        nameGap: 10,
        nameTextStyle: {
            color: '#bbb'
        },
        //		splitNumber: 30,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#aaa'
            }
        },
        z: 20,
        data: rankName
    }, {
        type: 'value',
        gridIndex: 1,
        scale: true,
        min: 0,
        max: 80,
        z: 20,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 1,
        z: 20,
        min: function (value) {
            return value.min - 10;
        },
        mam: function (value) {
            return value.max + 10;
        },
        //		max: dataMax,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            formatter: '{value}%'
        }
    }],

    //	雷达图
    radar: {
        zlevel: 20,
        z: 20,
        center: ['73%', '27%'],
        radius: '35%',
        startAngle: 90,
        nameGap: 1,
        splitNumber: 5,
        shape: 'polygon',
        scale: false,
        silent: false,
        triggerEvent: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#ccc'],
                opacity: 0.4
            }
        },
        splitArea: {
            show: false
        },
        indicator: [{
            name: '不限量',
            max: 50,
            color: 'gray'
        }, {
            name: '全家版',
            max: 50,
            color: 'gray'
        }, {
            name: '全家福',
            max: 50,
            color: 'gray'
        }, {
            name: '乐享家4G',
            max: 50,
            color: 'gray'
        }, {
            name: '乐享4G',
            max: 50,
            color: 'gray'
        }]
    },

    series: [{
        type: 'map',
        map: '重庆',
        // 提示框
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            confine: true, //将提示框限制为容器内显示
            formatter: function (data) {
                return data.name + '<br />数据:' + data.value;
            }
        },
        showLegendSymbol: false,
        data: rankData
    }, { //排名数据
        name: '排名数据',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: rankValue
    }, {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '量/收/毛利',
        type: 'bar',
        data: barData,
        itemStyle: {
            normal: {
                color: '#FAC3A8'
            },
            emphasis: {
                color: '#004881'
            }
        },
        barWidth: 15
    }, {
        xAxisIndex: 1,
        yAxisIndex: 2,
        name: '量/收/毛利占比',
        type: 'line',
        data: lineData,
        itemStyle: {
            normal: {
                color: '#CC7B38'
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    }, {
        name: 'radar',
        type: 'radar',
        radarIndex: 0,
        symbol: 'circle',
        symbolSize: 7,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#F9713C'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.2
            }
        },
        data: radarData
    },]
}