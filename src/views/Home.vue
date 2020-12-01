<template>
  <div class="home">
    <div id="main"></div>
  </div>
</template>

<script>
// import HelloWorldVue from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created() {
  },
  mounted() {
    this.initEcharts()
  },
  methods:{
    initEcharts(){
      /*
       *@description:实验简单的echarts使用
       *@author: zhtt
       *@date: 2020-12-01 16:34:03
       *@version: 
      */
    var echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
       title: {
          text: 'ECharts 入门示例'
       },
       tooltip: {},
       xAxis: {
           data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
       },
       yAxis: {},
       series: [{
           name: '销量',
           type: 'bar',
           data: [5, 20, 36, 10, 10, 20]
       }]
    })
    }
  }
}
</script>
<style lang="less">
  .home {
    width: 400px;
    height: 400px;
    div {
      height: 100%;
      background-color: aqua;
    }
  }
</style>

