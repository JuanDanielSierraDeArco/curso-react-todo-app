import React from "react"
import "./TodoBusqueda.css"


function TodoBusqueda({searchValue, setSearchValue}) {

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