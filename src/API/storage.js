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
  return function(opt) {
    switch (opt) {
      case "set":
        return function(name, content) {
          if (!name) return;
          if (typeof content !== "string") {
            content = JSON.stringify(content);
          }
          store.setItem(name, content);
        };
      case "get":
        return function(name) {
          if (!name) return;
          return store.getItem(name);
        };
      case "remove":
        return function(name) {
          if (!name) return;
          store.removeItem(name);
        };
      default:
        return;
    }
  };
}
