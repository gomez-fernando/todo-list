import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Leer un libro', completed: true },
//   { text: 'Ir a la piscina', completed: false },
//   { text: 'Equitación', completed: false },
//   { text: 'Clases de cocina', completed: false },
// ];

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

function App() {
  // const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO');
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log('Render antes del use effect');

  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos]);

  // console.log('Render luego del use effect');
  
  return [
    // <p>{patito}</p>,
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />,
  ];
}

export default App;
