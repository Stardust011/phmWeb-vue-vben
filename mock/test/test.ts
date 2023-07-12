import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const goodsList = [
  {
    ischeck: false,
    shopname: '南方大米官方自营店',
    goodslist: [
      {
        ischeck: false,
        goodsimg:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599222051671&di=6cd68103c241a811666d629510d6ed73&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2F6159252dd42a28343a670366d77170ee17cebfe6.jpeg%3Ftoken%3D9419ec4135abbe1aa172321cef8eb64a%26s%3DDF30BCE20000AAE610BAF0B60300C04A',
        goodsname: '芳姐卤香干 600g湖南特产武冈 卤豆腐豆干制品休闲素食零...',
        goodsspec: ['包邮', '麻辣'],
        price: '1000.00',
        maxnum: 100,
        num: 1,
      },
    ],
  },
  {
    ischeck: false,
    shopname: '南方大米官方自营店',
    goodslist: [
      {
        ischeck: false,
        goodsimg:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599222051671&di=6cd68103c241a811666d629510d6ed73&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2F6159252dd42a28343a670366d77170ee17cebfe6.jpeg%3Ftoken%3D9419ec4135abbe1aa172321cef8eb64a%26s%3DDF30BCE20000AAE610BAF0B60300C04A',
        goodsname: '芳姐卤香干 600g湖南特产武冈 卤豆腐豆干制品休闲素食零...',
        goodsspec: ['包邮', '麻辣'],
        price: '1000.00',
        maxnum: 100,
        num: 1,
      },
      {
        ischeck: false,
        goodsimg:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599222051671&di=6cd68103c241a811666d629510d6ed73&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2F6159252dd42a28343a670366d77170ee17cebfe6.jpeg%3Ftoken%3D9419ec4135abbe1aa172321cef8eb64a%26s%3DDF30BCE20000AAE610BAF0B60300C04A',
        goodsname: '芳姐卤香干 600g湖南特产武冈 卤豆腐豆干制品休闲素食零...',
        goodsspec: ['包邮', '麻辣'],
        price: '1000.00',
        maxnum: 100,
        num: 1,
      },
    ],
  },
]

export default [
  {
    url: '/basic-api/test/getGoodsList',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(goodsList)
    },
  },
] as MockMethod[]
