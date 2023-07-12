<template>
  <div>
    <br />
    <List :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }" :data-source="dataRes">
      <template #renderItem="{ item, index }">
        <ListItem>
          <Card :title="item.name">{{ index }}}Card + ontent</Card>
        </ListItem>
      </template>
    </List>
    <!--以下为测试区域-->
    <a-button @click="testdefhttp">点击测试</a-button>
  </div>
</template>
<script lang="ts" setup>
  import { Card, List, ListItem } from 'ant-design-vue'
  import { getElevatorsList } from '/@/api/phm/base'
  import { onMounted, reactive, ref, nextTick } from 'vue'

  let dataRes = reactive<any>([])

  async function testdefhttp() {
    await nextTick(getList)
    showList.value = true
  }
  async function defGetList() {
    await nextTick(getList)
    showList.value = true
  }

  const showList = ref(false)

  async function getList() {
    await getElevatorsList().then((res) => {
      res.forEach((e) => {
        dataRes.push(e)
      })
    })
  }

  onMounted(() => {
    defGetList()
    console.log(dataRes)
  })
</script>
