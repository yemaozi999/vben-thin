/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  captcha:string;
  captchaId:string;
}

export interface UserInfo {
  CreatedAt:string;
  ID:number;
  UpdatedAt:string;
  activeColor:string;
  authorities:AuthorityInfo[];
  authority:AuthorityInfo;
  authorityId:string;
  baseColor:string;
  headerImg:string;
  nickName:string;
  sideMode:string;
  userName:string;
  uuid:string;
}

export interface AuthorityInfo{
  CreatedAt: string;
  DeletedAt?: string;
  UpdatedAt?: string;
  authorityId: string;
  authorityName: string;
  children?:any;
  dataAuthorityId?: any
  defaultRouter?: string;
  menus?:any;
  parentId: string;
}


/**
 * @description: Login information return value
 */
export interface LoginResultModel {

  //过期时间
  expiresAt:number;
  //x-token
  token:string;
  //用户信息
  user:UserInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  userInfo:UserInfo
}

export interface SetUserAuthorityModel{
  authorityId:string;
}
