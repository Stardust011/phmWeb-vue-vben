<template>
  <div id="container" style="padding: 10px; width: 100%; height: 300px"></div>
</template>

<script setup>
  import AMapLoader from '@amap/amap-jsapi-loader'
  import { onMounted, shallowRef, watch } from 'vue'
  window._AMapSecurityConfig = {
    securityJsCode: 'a3622540d19aa0d0f60f29382fe1bed2', // '「申请的安全密钥」',
  }
  const props = defineProps({
    lat: null,
    lng: Number,
    locations: null,
  })
  // eslint-disable-next-line no-unused-vars
  let mapOne = shallowRef(null)
  let BMap
  // 初始化地图
  function initAMap() {
    AMapLoader.load({
      key: 'fbab13713d865255a413cf1796a7cef7', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.ElasticMarker'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        BMap = AMap
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mapOne = new AMap.Map('container', {
          //设置地图容器id
          viewMode: '3D', //是否为3D地图模式
          zoom: 11, //初始化地图级别
          center: [120.19, 30.26], //初始化地图中心点位置
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // 设置地图中心
  function setMapCenter() {
    // eslint-disable-next-line vue/no-ref-as-operand
    mapOne.setCenter([props.lng, props.lat])
  }
  // 添加新标记
  function addMarker() {
    // 标记坐标
    let Marker = new BMap.Marker({
      position: new BMap.LngLat(props.lng, props.lat),
    })
    // eslint-disable-next-line vue/no-ref-as-operand
    mapOne.add(Marker)
  }

  onMounted(() => {
    //DOM初始化完成进行地图初始化
    initAMap()
  })

  watch(
    () => props.lng,
    () => {
      setMapCenter()
      addMarker()
    },
  )
</script>

<style scoped>
  #container {
    padding: 10px;
    margin: 0px;
    width: 400px;
    height: 400px;
  }
</style>
