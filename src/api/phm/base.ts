import { defHttp } from '/@/utils/http/axios'

enum Api {
  GET_Elevators_List = '/phm/base',
  GET_Elevators_Detail = '/phm/detail',
}

export function getElevatorsList() {
  return defHttp.get({
    url: Api.GET_Elevators_List,
  })
}

export function getElevatorsDetail(ids: Number) {
  return defHttp.get({
    url: Api.GET_Elevators_Detail,
    params: { id: ids },
  })
}
