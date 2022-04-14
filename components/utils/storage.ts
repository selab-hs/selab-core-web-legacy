const storage = {
  get: <T>(key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },

  set: <T>(key: string, value: T) => {
    try {
      console.log(JSON.stringify(value), value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  },
};

export default storage;
