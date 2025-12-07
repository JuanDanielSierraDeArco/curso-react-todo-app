import React from "react"
import "./TodoBusqueda.css"

function TodoBusqueda({searchValue, setSearchValue}) {

  return(
    <input placeholder="Cortar cebolla" 
    className="TodoBusqueda"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
  )
}

export { TodoBusqueda };