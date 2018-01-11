/**
 * 加载地图配置
 * @param {Object} mapChart    echarts图表
 * @param {String} mapName        map对应的注册地图名字
 */
function setMapOption(mapChart, mapName) {
    mapChart.setOption({
        visualMap: {
            type: 'piecewise',
            seriesIndex: 0,
            z: 20,
            splitNumber: 2, //分段数
            // pieces: [{min: 300}, {min: 200, max: 300}, {min: 100, max: 200}, {min: 10, max: 100}],
            minOpen: true,
            maxOpen: true,
            itemWidth: 30,
            inRange: {
                color: ['yellow', 'red']
            }, //选中部分映射效果
            outOfRange: {
                color: ['#aaa']
            } //未选中部分映射效果
        },
        series: [{
            type: 'map',
            map: mapName,
            name: 'mapChart',
            roam: 'scale', //开启鼠标缩放和平移漫游  'scale' ||'move'||true
            aspectScale: 0.8,
            zoom: 1.2,
            top: '10%',
            left: 100,
            selectedMode: 'single',
            scaleLimit: {
                min: 0.7,
                max: 10
            }, //缩放极限
            zlevel: 10,
            z: 10,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                    color: 'red'
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    areaColor: '#eee',
                    opacity: 0.6
                },
                emphasis: {
                    areaColor: '#EE4A21',
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 0.7
                }
            },
            layoutSize: 400
        }]
    })
}

function initMapChart(mapName) {
    var mapChart = echarts.init(document.getElementsByClassName('map_chart')[0]);
    setMapOption(mapChart, mapName);
    return mapChart;
}