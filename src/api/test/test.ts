import { defHttp } from '/@/utils/http/axios'

enum Api {
  GET_GOODS_LIST = '/test/getGoodsList',
}

export const getGoodsList = () => {
  return defHttp.get({
    url: Api.GET_GOODS_LIST,
  })
}
