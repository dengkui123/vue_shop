import request from ".";

export function getMenuList() {
  return request({
    method: 'get',
    url: 'menus',
  })
}