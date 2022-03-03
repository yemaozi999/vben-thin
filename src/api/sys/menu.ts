import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  GetMenuList = '/menu/getMenu',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.post<getMenuListResultModel>({ url: Api.GetMenuList });
};
