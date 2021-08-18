export default {
  getStorage: (key) => window.sessionStorage.getItem(key),
  setStorage: (key, value) => window.sessionStorage.setItem(key, value),
  removeStorage: (key) => window.sessionStorage.clear(key),

}