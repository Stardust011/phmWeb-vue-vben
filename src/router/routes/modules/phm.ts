import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const setup: AppRouteModule = {
  path: '/phm',
  name: 'phmDemo',
  component: LAYOUT,
  redirect: '/phm/index',
  meta: {
    orderNo: 100,
    hideChildrenInMenu: true,
    icon: 'material-symbols:cloud-outline',
    title: t('routes.demo.phm.page'),
  },
  children: [
    {
      path: 'index',
      name: 'phmDemoPage',
      component: () => import('/@/views/phm/index.vue'),
      meta: {
        title: t('routes.demo.phm.page'),
        icon: 'material-symbols:cloud-outline',
        hideMenu: true,
      },
    },
  ],
}

export default setup
