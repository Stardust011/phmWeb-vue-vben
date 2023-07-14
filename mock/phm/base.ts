import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'
import { resultError } from '../_util'

const elevatorsList = [
  {
    id: 1,
    name: 'BBB大厦A座1号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    repairerNumber: 10,
  },
  {
    id: 2,
    name: 'BBB大厦A座2号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 50,
    location: [
      {
        lng: 121.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    repairerNumber: 11,
  },
  {
    id: 3,
    name: 'BBB大厦A座3号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 80,
    location: [
      {
        lng: 120.162677,
        lat: 31.270211,
      },
    ],
    pairs: 100,
    repairerNumber: 12,
  },
]

export default [
  {
    url: '/basic-api/phm/base',
    timeout: 1000,
    method: 'get',
    response: () => {
      const baseList: any[] = []
      for (const Item of elevatorsList) {
        baseList.push({
          id: Item.id,
          name: Item.name,
          lastCheck: Item.lastCheck,
          healthy: Item.healthy,
        })
      }
      return resultSuccess(baseList)
    },
  },
  {
    url: '/basic-api/phm/rebase',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultError()
    },
  },
  {
    url: '/basic-api/phm/detail',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const ids = +query.id
      const checkID = elevatorsList.find((item) => item.id === ids)
      if (!checkID) {
        return resultError('No Such ID!')
      }
      return resultSuccess(checkID)
    },
  },
] as MockMethod[]
