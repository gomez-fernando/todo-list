import React from 'react';

const TodoContext = React.createContext();

function TodoProvider(props){
  return (
    <TodoContext.Provider value={{
      
    }}>
      {props.children}
    </TodoContext.Provider>

  )
}

<TodoContext.Consumer></TodoContext.Consumer>