<template>
  <div class="home">
    <div id="main"></div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="fiver">5</div>
    <div class="six">6</div>
    <div class="seven">7</div>
    <div class="eight">8</div>
    <div class="nine">9</div>
  </div>
</template>

<script>
// import HelloWorldVue from '../components/HelloWorld.vue'
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  created() {
    this.$nextTick(()=>{
      this.initEcharts()
    })
  },
  mounted() {

  },
  methods:{
    initEcharts(){
      /*
       *@description:实验简单的echarts使用
       *@author: zhtt
       *@date: 2020-12-01 16:34:03
       *@version:
      */
      var echarts = require("echarts")
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"))
      // 绘制图表

      myChart.setOption({
        title: {
          // text: '基础练习练习训练和经济经济技术计算机技术计算机视觉哈哈哈哈哈哈哈哈哈',
          text: `{text|基础练习练习训练和经济经济技术计算机技术计算机视觉}`,
          target: 'blank',
          // textAlign: 'left',
          // left:'20%',
          link: window.location.href+'target',
          textStyle:{
            width: 150,
            height: 50,
            overflow: 'truncate',
            ellipsis: '...',
            rich:{
              text:{
                color: '#ff3333',
                width: 150,
                height: 50,
                overflow: 'truncate',
                ellipsis: '...'
              }
            }
          },
          subtext: `{subtext|副标题}`,
          subtextStyle:{
            verticalAlign: 'middle',
            rich:{
              subtext:{
                color:'green',
                align: 'center'
              }
            }
          }
        },
        legend: {
          // 在文本中，可以对部分文本采用 rich 中定义样式。
          // 这里需要在文本中使用标记符号：
          // `{styleName|text content text content}` 标记样式名。
          // 注意，换行仍是使用 '\n'。
          formatter: [
            `{a|这段文本采用样式a}`,
            `{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}`
          ].join('\n'),
          rich: {
            a: {
              color: 'red',
              lineHeight: 10
            },
            b: {
              height: 40
            },
            x: {
              fontSize: 18,
              fontFamily: 'Microsoft YaHei',
              borderColor: '#449933',
              borderRadius: 4
            }
          }
        },
        tooltip: {
          trigger: 'item',
          position:function(pos,params,dom,rect,size){
            console.log(pos,params,dom,rect,size)
            let top = pos[1]
            let lr = size.viewSize[0] - (pos[0] + size.contentSize[0])
            //TODO LEFT距离有问题
            let lt = pos[0] > rect.x ? pos[0]-size.contentSize[0] : rect.x - size[0].contentSize[0]
            let location = {
              'top': top,
              'left': pos[0] > size.viewSize[0] / 2 ? lt: '',
              'right': pos[0]< size.viewSize[0] / 2 ? lr: ''
            }
            return location
          }
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        }]
      })
    }
  }
}
</script>
<style lang="less">
body,html{
height: 100%;
width: 100%;
padding: 0px;
margin: 0px;
}
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      height:400px;
      width: calc(100% / 3);
    }
  }
</style>

