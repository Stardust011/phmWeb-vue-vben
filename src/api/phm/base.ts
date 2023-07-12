import { defHttp } from '/@/utils/http/axios'

enum Api {
  GET_Elevators_List = '/phm/base',
}

export const getElevatorsList = () => {
  return defHttp.get({
    url: Api.GET_Elevators_List,
  })
}
