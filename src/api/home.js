import request from "./index.js";

// 获取菜单列表
export function getMenuList() {
  return request({
    method: 'get',
    url: 'menus',
  })
}