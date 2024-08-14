import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache"; // prefix for the cache
const expiryInMinutes = 5; // 5 minutes

// Type for the item to be stored in cache
type CachedItem<T> = {
  value: T;
  timestamp: number;
};

// store the data for 5 minutes
const store = async (key: string, value: any) => {
  try {
    const item = { value, timestamp: Date.now() }; // store the value and the current time
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

// check if the data is expired
const isExpired = (item: { timestamp: number }) => {
  const now = Date.now();
  const diff = now - item.timestamp;
  return diff > 300000; // 5 minutes
};

// get the data and check if it's expired
const get = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null; // if the value doesn't exist

    const item: CachedItem<T> = JSON.parse(value);

    if (!item) return null; // if the item doesn't exist

    // check if the data is expired: remove it and return null
    // but here we vialoation the (CQS) Command Query Separation principle: a function should either do something or answer something, but not both.
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { store, get };

// this is a simple cache utility that stores data in the device's local storage.
