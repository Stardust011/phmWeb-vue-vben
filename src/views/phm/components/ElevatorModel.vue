<template>
  <!-- 抽屉内部 -->
  <!-- 表格区域 -->
  <DetailsDescription :data="detailRes[0]" />
  <!-- 视频区域 -->
  <Divider>实时监控</Divider>
  <VideoPlayer :resSrc="resSrc" />
  <!-- 地图区域 -->
  <Divider />
  <MapContainer :lat="location.lat" :lng="location.lng" :locations="location" />
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref, watch } from 'vue'
  import { Divider } from 'ant-design-vue'
  import MapContainer from './Map/MapContainer.vue'
  import VideoPlayer from './VideoPlayer.vue'
  import DetailsDescription from './DetailsDescription.vue'
  import { getElevatorsDetail } from '/@/api/phm/base'
  const props = defineProps({
    id: Number,
  })
  // 定义空数组
  const detailRes = reactive<any>([])
  const location = reactive({
    lat: 30.26,
    lng: 120.19,
  })
  const resSrc = ref('')
  // 从Api获取详细信息
  async function getDetail() {
    await getElevatorsDetail(props.id!).then((res) => {
      detailRes.push(res)
    })
  }
  async function defGetDetail() {
    await nextTick(getDetail)
  }
  onMounted(() => {
    defGetDetail()
  })
  watch(detailRes, () => {
    location.lat = detailRes[0].location[0].lat
    location.lng = detailRes[0].location[0].lng
    resSrc.value = detailRes[0].url
  })
</script>
