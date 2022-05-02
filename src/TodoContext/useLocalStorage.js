import React from 'react';

// los HOOKS deben empezar siempre con use
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      } catch (error) {
        // aquí cambiamos de false a error
        setError(error);
      }
    }, 1000)
  });


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // se retorna un array si sólo 2 estados en el custom react hook, si no se envía un objeto
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export {useLocalStorage};