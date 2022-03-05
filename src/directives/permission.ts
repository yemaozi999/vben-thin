/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-auth="RoleEnum.TEST"
 */
import type { App, Directive, DirectiveBinding } from 'vue';

/*import { usePermission } from '/@/hooks/web/usePermission';*/

import { useUserStore } from '/@/store/modules/user'

function isAuth(el: Element, binding: any) {
  /*const { hasPermission } = usePermission();*/

  const userStore = useUserStore()

  const userInfo = userStore.getUserInfo

  let type = ''
  switch (Object.prototype.toString.call(binding.value)) {
    case '[object Array]':
      type = 'Array'
      break
    case '[object String]':
      type = 'String'
      break
    case '[object Number]':
      type = 'Number'
      break
    default:
      type = ''
      break
  }

  if (type === '') {
    /* eslint-disable */
    //console.error("v-auth必须是Array,Number,String属性,暂不支持其他属性")
    /* eslint-enable */
    /*el.style.display = 'none'*/
    el.parentNode?.removeChild(el)
    return
  }
  const waitUse = binding.value.toString().split(',')
  let flag = waitUse.some(item => item === userInfo.authorityId)
  if (binding.modifiers.not) {
    flag = !flag
  }
  if (!flag) {
    /*el.style.display = 'none'*/
    el.parentNode?.removeChild(el)
  }

  /*const value = binding.value;
  console.log(value)
  if (!value) return;
  if (!hasPermission(value)) {
    el.parentNode?.removeChild(el);
  }*/
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted,
};

export function setupPermissionDirective(app: App) {
  app.directive('auth', authDirective);
}

export default authDirective;
