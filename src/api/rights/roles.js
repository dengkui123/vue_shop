// 角色列表接口

import request from "../request";

export function getRolesList() {
  return request({
    url: 'roles',
    method: 'get',
  })
}