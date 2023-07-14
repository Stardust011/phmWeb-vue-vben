<template>
  <!-- 抽屉内部 -->
  <p>{{ id }}</p>
  <p style="width: 600px">{{ detailRes }}</p>
  <p :v-if="false">{{ detailRes }}</p>
  <MapContainer :lat="location.lat" :lng="location.lng" :locations="location "/>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, watch } from 'vue'
  import MapContainer from './Map/MapContainer.vue'
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
  watch(detailRes, (newValue, oldValue) => {
    location.lat = detailRes[0].location[0].lat
    location.lng = detailRes[0].location[0].lng
    console.log('父监测器有效' + location.lat)
  })
</script>
