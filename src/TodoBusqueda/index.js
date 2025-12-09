import React from "react"
import "./TodoBusqueda.css"
import { TodoContext } from "../TodoContext"

function TodoBusqueda() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return(
    <input placeholder="Buscar" 
    className="TodoBusqueda"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
  )
}

export { TodoBusqueda };