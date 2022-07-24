import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (
  key: string,
  defaultValue: any
): [value: any, setValue: React.Dispatch<any>, remove: () => void] => {
  const [value, setValue] = useState<any>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, localStorage]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);
  return [value, setValue, remove];
};

export default useLocalStorage;
