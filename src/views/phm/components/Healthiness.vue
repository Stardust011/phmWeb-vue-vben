<template>
  <Row type="flex" style="justify-content: center">
    <Col flex="120px">
      <Progress type="dashboard" :percent="healthy" :gapDegree="60" :strokeColor="color" />
    </Col>
    <Col flex="auto">
      <Card title="上次检查时间" :bordered="false">{{ time }}</Card>
    </Col>
  </Row>
</template>

<script lang="ts" setup>
  import { Progress, Card, Row, Col } from 'ant-design-vue'
  import { computed, onMounted } from 'vue'
  import moment from 'moment'

  const props = defineProps({
    healthy: Number,
    lastTime: Number,
  })
  enum progressColors {
    black = '#000000',
    blue = '#108ee9',
    green = '#87d068',
    red = '#ff4d4f',
  }
  enum colorThreshold {
    red = 50,
    green = 70,
  }
  const color = computed(() => {
    if (props.healthy! < colorThreshold.red) {
      return progressColors.red
    } else {
      if (props.healthy! > colorThreshold.green) return progressColors.green
      else return progressColors.blue
    }
  })
  const time = computed(() => {
    return moment(props.lastTime).format('YYYY-MM-DD')
  })
  onMounted(() => {})
</script>
