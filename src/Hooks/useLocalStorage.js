import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setvalue] = useState(() => {
    try {
      //check there is avalue in localstorage by key
      const localValue = window.localStorage.setItem(key);
      //return the value
      return localValue ? JSON.stringify(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  //update localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },[key, value]);
  return [value, setvalue];
};
export default useLocalStorage;
