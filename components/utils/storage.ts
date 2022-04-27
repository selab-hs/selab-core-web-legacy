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
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  },
};

export default storage;
