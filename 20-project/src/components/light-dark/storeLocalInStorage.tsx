import { useEffect, useState } from "react";

export default function StoreLocalInStorage(
  key: string,
  defaults: unknown
): [any, any] {
  let currentValue;

  const [value, setValue] = useState<unknown>(defaults);

  function handleStorage() {
    try {
      currentValue = localStorage.getItem(key);
      if (currentValue) {
        currentValue = JSON.parse(currentValue);
      }
      if (!currentValue) {
        localStorage.setItem(key, JSON.stringify(defaults));
        currentValue = JSON.parse(localStorage.getItem(key) || "");
      }
      setValue(currentValue);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  function changeValue(item: string): void {
    localStorage.setItem(key, JSON.stringify(item));
    handleStorage();
  }

  useEffect(() => {
    handleStorage();
  }, [defaults, key]);

  return [
    value,
    (item: string) => {
      changeValue(item);
    },
  ];
}
