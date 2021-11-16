import  { useState, createContext } from 'react'

export const DataContext = createContext()

export const ContextProvider = (props) => {
     
     const [properties, setProperties] = useState([])

     return(
          <DataContext.Provider value={[ properties, setProperties ]}>
               { props.children }
          </DataContext.Provider>
     )

}