// 用户接口

import request from './index.js'

export function login(params) {
  return request({
    url: 'login',
    method: 'post',
    params
  })
}

export function getUserList(params) {
  return request({
    url: 'users',
    method: 'get',
    params
  })
}

export function userStateChanged(uid, type) {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'put',
  })
}

export function addUser(params) {
  return request({
    url: 'users/',
    method: 'post',
    data: params
  })
}

export function getUserById(id) {
  return request({
    url: `users/${id}`,
    method: 'get',
  })
}

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

export function removeUserById(id) {
  return request({
    url: 'users/' + id,
    method: 'delete',
  })
}