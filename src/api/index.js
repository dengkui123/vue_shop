// 接口汇总
import { getMenuList } from './home/home.js'
import { login, getUserList, userStateChanged, addUser, getUserById, editUser, removeUserById, setUserRoles } from './user/user.js'
import { getRightsList } from './rights/rights.js'
import { getRolesList, delRolesById, setRoleRights } from './rights/roles.js'

export {
  login,
  getUserList,
  userStateChanged,
  addUser,
  getUserById,
  editUser,
  removeUserById,
  getMenuList,
  getRightsList,
  getRolesList,
  delRolesById,
  setRoleRights,
  setUserRoles
}