<template>
<div>
    <button @click="open">click</button>
    <button @click="open2">clic2k</button>
    <div id="box"></div>
</div>
</template>

<script>
import work from '@/components/work'
import {
    apiAddress,test1
} from '@/request/api'
import echarts from 'echarts'
export default {
    name: "",
    data() {
        return {
            dialogVisible: false
        }

    },
    methods: {
        open() {
            apiAddress({
                type: 0,
                sort: 1
            }).then(res => {
                // 获取数据成功后的其他操作
                console.log('27---', res)
            })
        },
        open2(){
            this.axios.get('http://localhost:3000/json/index.json').then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },
        getOptions(){
            var myChart = echarts.init(document.getElementById('box'));
            let option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{a} <br/><span>ss</span>: {c} ({c}%)'
                formatter:data=>{
                    console.log('111',data);
                    let div=`<div><span style="display:inline-block;width:8px;height:8px;vertical-align:middle;margin-right:4px;border-radius:50%;background-color:${data.color.colorStops[0].color}"></span><span >${data.name}:</span><span>${data.data.data}</span></div>`
                    return div
                }
            },
            color:['#ffff00','#00ffff','#b6d7a8','#6d9eeb'],
            legend: {
                show:true,
                left: 'center',
                data: [
                    { name: '作文得分', icon: 'circle'},
                    {name: '填空得分', icon: 'circle' },
                    {name: '读写得分', icon: 'circle'},
                    {name: '听力得分', icon: 'circle'}
                ]
            },
            title: {
                text: '成绩',
                textStyle: {
                    color: '#01c4a3',
                    fontSize: 40
                },
                subtext: '总分：100分',
                subtextStyle: {
                    color: '#909090',
                },
                itemGap: -10, // 主副标题距离
                left: 'center',
                top: 'center'
            },
            angleAxis: {
                max: 100, // 满分
                clockwise: false, // 逆时针
                // 隐藏刻度线
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                // 隐藏刻度线
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            polar: {
                center: ['50%', '50%'],
                radius: '140%' //图形大小
            },
            series: [{
                type: 'bar',
                 name: '作文得分',
                data: [
                    {
                    name: '作文得分',
                    value: 20+30+20+30,
                    data:30,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#ffff00'
                            }, {
                                offset: 1,
                                color: '#ffff00'
                            }])
                        }
                    },
                }
                ],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 25,
                barGap: '-100%', // 两环重叠
                z: 1,
            },{ // 灰色环
                name: '填空得分',
                type: 'bar',
                data: [{
                    name: '填空得分',
                    value: 20+30+20,
                    data:20,
                    itemStyle: {
                        color: '#e2e2e2',
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 5,
                        shadowOffsetY: 2,
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#00ffff'
                            }, {
                                offset: 1,
                                color: '#00ffff'
                            }])
                        }
                    }
                }],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 25,
                barGap: '-100%', // 两环重叠
                z: 2
            },
            { // 灰色环
                name: '读写得分',
                type: 'bar',
                data: [{
                    name: '读写得分',
                    value: 20+30,
                    data:30,
                    itemStyle: {
                        color: '#ccc',
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 5,
                        shadowOffsetY: 2,
                            normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#b6d7a8'
                            }, {
                                offset: 1,
                                color: '#b6d7a8'
                            }])
                        }
                    }
                }],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 25,
                barGap: '-100%', // 两环重叠
                z: 3
            },
            { // 灰色环
                name: '听力得分',
                type: 'bar',
                data: [{
                    value: 20,
                    data:20,
                    name: '听力得分',
                    itemStyle: {
                        color: '#ccc',
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 5,
                        shadowOffsetY: 2,
                            normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#6d9eeb'
                            }, {
                                offset: 1,
                                color: '#6d9eeb'
                            }])
                        }
                    }
                }],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 25,
                barGap: '-100%', // 两环重叠
                z: 4
            }
            ]
            };
            myChart.setOption(option);
        }

    },
    mounted() {
        this.open();
        this.getOptions();
    },
    components: {
        work
    }
}
</script>

<style scoped>
#box{
    width:500px;
    height: 400px;
}
</style>
