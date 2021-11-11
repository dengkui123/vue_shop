// 权限管理接口

import request from "../request.js";

// 获取所有权限列表
export function getRightsList(type) {
  return request({
    url: 'rights/' + type,
    method: 'get',
  })
}

