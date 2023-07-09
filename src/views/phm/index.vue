<template>
  <div>
    <br />
    <List :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }" :data-source="data">
      <template #renderItem="{ item }">
        <ListItem>
          <Card :title="item.title">Card content</Card>
        </ListItem>
      </template>
    </List>
    <Card>8888888888</Card>
    <!--以下为测试区域-->
    <a-button @click="test">点击测试</a-button>
  </div>
</template>
<script lang="ts" setup>
  import { Card, List, ListItem } from 'ant-design-vue'
  // const data1 = await fetch('https://hn.algolia.com/api/v1/search?query=vue').then(
  //   (rsp) => rsp.json(),
  // )
  async function test(event) {
    alert(`Hello!`)
    const data1 = await fetch('https://hn.algolia.com/api/v1/search?query=vue').then((rsp) =>
      rsp.json(),
    )
    console.log(data1.hits)
    if (event) {
      alert(event.id)
    }
  }

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ]
</script>
