<template>
  <div style="padding: 0 20px 20px 20px">
    <Alert
      message="[Error] Api获取数据失败"
      description="Api failed to get data."
      type="error"
      show-icon
      v-if="showAlert"
    />
    <List
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }"
      :data-source="dataRes"
      style="padding-top: 10px"
    >
      <template #renderItem="{ item }">
        <ListItem>
          <Card :title="item.name" :hoverable="true" @click="showModel(item.id, item.name)">
            <Healthiness :healthy="item.healthy" :lastTime="item.lastCheck" />
          </Card>
        </ListItem>
      </template>
    </List>
    <!--抽屉区域-->

    <!--弹窗区域-->
    <Drawer :visible="show" :title="DrawerName" destroyOnClose @close="handleCancel">
      <ElevatorModel :id="elevatorID" />
    </Drawer>

    <!--以下为测试区域-->
    <a-button @click="showModel(11120, '00000000')">点击测试弹窗</a-button>
    <a-button @click="defGetDetail">点击测试API</a-button>
    <a-button @click="defGetList">点击测试API</a-button>
  </div>
</template>
<script lang="ts" setup>
  import { Card, List, ListItem, Alert, Drawer } from 'ant-design-vue'
  import { getElevatorsList, getElevatorsDetail } from '/@/api/phm/base'
  import { onMounted, reactive, ref, nextTick } from 'vue'
  import Healthiness from './components/Healthiness.vue'
  import ElevatorModel from './components/ElevatorModel.vue'

  const DrawerName = ref('1号电梯')
  const elevatorID = ref(-1)

  function showModel(ids, name) {
    elevatorID.value = ids
    DrawerName.value = name
    show.value = true
  }

  function handleCancel() {
    show.value = false
  }

  // 控制弹窗显隐
  const showAlert = ref(false)
  const show = ref(false)
  // 列表数据
  let dataRes = reactive<any>([])
  //Api获取并推送至dataRes
  async function getList() {
    await getElevatorsList().then((res) => {
      res.forEach((e) => {
        dataRes.push(e)
      })
    })
  }
  // 获取信息后再显示
  async function defGetList() {
    await nextTick(getList)
    if (dataRes.lenth == 0) {
      // 如果没获取到信息，则弹出警告
      showAlert.value = true
    }
  }

  // 定义空数组
  const location = reactive<any>([])
  const ids = 2
  // 从Api获取详细信息
  async function getDetail() {
    await getElevatorsDetail(ids).then((res) => {
      location.push(res)
    })
  }
  async function defGetDetail() {
    await nextTick(getDetail)
    // console.log(location)
  }
  onMounted(() => {
    defGetList()
  })
</script>
