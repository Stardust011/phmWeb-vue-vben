import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'
import { resultError } from '../_util'

const elevatorsList = [
  {
    id: 1,
    name: 'BBB大厦A座1号',
    needCheck: false,
    lastCheck: 1626832597790,
    location: [
      {
        lon: 30.232322,
        lat: 137.0,
      },
    ],
    repairerNumber: 10,
  },
  {
    id: 2,
    name: 'BBB大厦A座2号',
    needCheck: false,
    lastCheck: 1626832597790,
    location: [
      {
        lon: 30.232322,
        lat: 137.0,
      },
    ],
    repairerNumber: 11,
  },
  {
    id: 3,
    name: 'BBB大厦A座3号',
    needCheck: false,
    lastCheck: 1626832597790,
    location: [
      {
        lon: 30.232322,
        lat: 137.0,
      },
    ],
    repairerNumber: 12,
  },
]

export default [
  {
    url: '/basic-api/phm/base',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(elevatorsList)
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
] as MockMethod[]
