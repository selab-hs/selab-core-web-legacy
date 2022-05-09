const storage = {
  get: <T>(key: string) => {
    if (typeof window === 'undefined') return undefined;

    try {
      const item = localStorage.getItem(key);
      if (!item) return undefined;
      return JSON.parse(item) as T;
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
  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },
};

export default storage;
