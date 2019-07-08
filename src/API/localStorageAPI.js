export function storage(type) {
  let store = undefined;
  if (!type) {
    return;
  } else if (type === "local") {
    store = window.localStorage;
  } else if (type === "session") {
    store = window.sessionStorage;
  } else {
    return;
  }
  return function (opt) {

  }
  
  {
    /**
     * 存储localStorage
     */
    setStore: (name, content) => {
      if (!name) return;
      if (typeof content !== "string") {
        content = JSON.stringify(content);
      }
      localStorage.setItem(name, content);
    },

    /**
     * 获取localStorage
     */
    getStore: name => {
      if (!name) return;
      return localStorage.getItem(name);
    },

    /**
     * 删除localStorage
     */
    removeStore: name => {
      if (!name) return;
      localStorage.removeItem(name);
    }
  };
}
