import React from "react";
import "./TodoSearch.css";

// class Componente extends React.Component {
//   constructor() {
//     this.state = {
//       nombre: 'Jaime'
//     }
//   }

//   render(){
//     return (
//       <div onClick={() => this.setState({nombre: 'Enrique'})}>{this.state.nombre}</div>
//     )
//   }
// }

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  // return [
  //   <input 
  //     className="TodoSearch" 
  //     placeholder="Libro" 
  //     onChange = {onSearchValueChange}
  //     // onChange = {() => setEstado('Miguel')}

  //   />,
  //   <p>
  //     {searchValue}
  //   </p>

  // ];

  return (
    // <React.Fragment>
      <input 
        className="TodoSearch" 
        placeholder="Libro" 
        value={searchValue}
        onChange = {onSearchValueChange}
        // onChange = {() => setSearchValue('Miguel')}

      />
      // <p>
      //   {searchValue}
      // </p>
    // </React.Fragment>

  );
}

export { TodoSearch };
