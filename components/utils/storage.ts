const isObject = (item: string) => {
  return item.includes('{');
};

const storage = {
  get: <T>(key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return undefined;
      return isObject(item) ? (JSON.parse(item) as T) : item;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },

  set: <T>(key: string, value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  },
};

export default storage;
