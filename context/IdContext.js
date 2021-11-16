import  { useState, createContext } from 'react'

export const IdContext = createContext()

export const IdContextProvider = (props) => {

     const [currentId, setCurrentId] = useState(0)

     return(
          <IdContext.Provider value={[ currentId, setCurrentId ]}>
               { props.children }
          </IdContext.Provider>
     )
}