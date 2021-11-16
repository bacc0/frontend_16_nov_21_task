import '../styles/styles.css'
import { ContextProvider } from './../context/DataContext'
import { IdContextProvider } from './../context/IdContext'
import { AnimatePresence }    from 'framer-motion'

function MyApp({ Component, pageProps }) {
     return (  
               <ContextProvider >
                    <IdContextProvider>
                         <AnimatePresence exitBeforeEnter >
                              <Component {...pageProps} />
                         </AnimatePresence>
                    </IdContextProvider>
               </ContextProvider>
          )
     }

export default MyApp
