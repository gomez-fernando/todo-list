import React from 'react';
import {TodoProvider} from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Leer un libro', completed: true },
//   { text: 'Ir a la piscina', completed: false },
//   { text: 'Equitación', completed: false },
//   { text: 'Clases de cocina', completed: false },
// ];



function App() {
  
  return [
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  ];
}

export default App;
