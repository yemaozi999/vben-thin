import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel, SetUserAuthorityModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = 'base/login',
  Logout = '/jwt/jsonInBlacklist',
  GetUserInfo = '/user/getUserInfo',
  GetPermCode = '/getPermCode',
  Captcha = '/base/captcha',
  SetUserAuthority = '/user/setUserAuthority'
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

export function captcha(){
  return defHttp.post<any>({ url: Api.Captcha });
}

export function setUserAuthority(params:SetUserAuthorityModel){
  return defHttp.post<any>({ url: Api.SetUserAuthority,params });
}
