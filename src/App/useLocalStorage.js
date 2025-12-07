import React from "react";

const useLocalStorage = (itemName, initialValue ) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = initialValue;
  }else{
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parseItem);

  const saveItem = (items) => {
    localStorage.setItem(itemName, JSON.stringify(items))
    setItem(items)
  };

  return [item, saveItem]
}

export { useLocalStorage };