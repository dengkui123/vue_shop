// 用户接口

import request from './index.js'
// 用户登录
export function login(params) {
  return request({
    url: 'login',
    method: 'post',
    params
  })
}
// 获取用户列表
export function getUserList(params) {
  return request({
    url: 'users',
    method: 'get',
    params
  })
}
// 修改用户状态
export function userStateChanged(uid, type) {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'put',
  })
}
// 添加用户
export function addUser(params) {
  return request({
    url: 'users/',
    method: 'post',
    data: params
  })
}
// 通过ID查找用户信息
export function getUserById(id) {
  return request({
    url: `users/${id}`,
    method: 'get',
  })
}
// 编辑用户信息
export function editUser(params) {
  return request({
    url: `users/${params.id}`,
    method: 'put',
    data: {
      email: params.email,
      mobile: params.mobile,
    }   
  })
}
// 删除用户
export function removeUserById(id) {
  return request({
    url: 'users/' + id,
    method: 'delete',
  })
}