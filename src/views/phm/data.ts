interface elevatorsItem {
  id: number
  name: string
  needCheck: boolean
  lastCheck: number
  location: [
    {
      lon: number
      lat: number
    },
  ]
  repairerNumber: number
}

export const elevatorsList: elevatorsItem[] = [
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
