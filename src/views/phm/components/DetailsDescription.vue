<template>
  <Description title="电梯详情" :content="3" :data="props.data" :schema="schema" />
</template>
<script lang="ts" setup>
  import { Description, DescItem } from '/@/components/Description'
  import moment from 'moment'
  const props = defineProps({
    data: Object,
  })
  const schema: DescItem[] = [
    {
      field: 'name',
      label: '电梯名称',
    },
    {
      field: 'id',
      label: '电梯编号',
      render: (curVal, data) => {
        return `${data.pairs}-${curVal}` //pairs可改为公司编号
      },
    },
    {
      field: 'repairerNumber',
      label: '维修编号',
    },
    {
      field: 'needCheck',
      label: '维护标记',
      render: (curVal) => {
        if (curVal == true) return '需要维护'
        else return `运行正常`
      },
    },
    {
      field: 'lastCheck',
      label: '最后检查时间',
      span: 2,
      render: (curVal) => {
        return moment(curVal).format('YYYY-MM-DD')
      },
    },
    {
      field: '',
      label: '',
    },
  ]
</script>
