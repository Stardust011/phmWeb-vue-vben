<template>
  <video v-if="show" v-bind="options" style="width: auto">此浏览器暂不支持播放。</video>
</template>
<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue'
  const props = defineProps({
    resSrc: String,
  })
  const show = ref(false)
  const options = reactive({
    // width: 'auto', //播放器宽度
    // height: '0', //播放器高度
    controls: true, //打开控制台
    // title: '', //视频名称
    autoPlay: true, //自动播放
    muted: true, //静音播放
    src: props.resSrc, //视频源
  })
  watch(props, () => {
    options.src = props.resSrc
    show.value = true
  })
</script>
