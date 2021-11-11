// 角色列表接口

import request from "../request";

export function getRolesList() {
  return request({
    url: 'roles',
    method: 'get',
  })
}

export function delRolesById(roleId, rightId) {
  return request({
    url: `roles/${roleId}/rights/${rightId}`,
    method: 'delete',
  })
}

export function setRoleRights(roleId, rids) {
  return request({
    url: `roles/${roleId}/rights`,
    method: 'post',
    data: {
      rids
    }
  })
}