import { useContext } from 'react'
import { IdContext } from '../context/IdContext'
import { DataContext } from '../context/DataContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const DetailsData = ({ setEditUser }) => {

     const [properties, setProperties] = useContext(DataContext)
     const [currentId, setCurrentId] = useContext(IdContext)


     const router = useRouter()
     return (
          <AnimatePresence>
               {/* { console.log( 'jjj:', currentId ) } */}
               {properties.map((prop, i) => (
                    prop.id === currentId && (

                    <motion.div
                         key={i}
                         className='card-container'
                         initial={{ opacity: 0.1, scale: 0.4, y: 170 }}
                         animate={{ opacity: 1, scale: 1, y: 0, delay: 0.1, stiffness:500 }}
                         transition={{ stiffness: 5, duration: 0.2 }}
                         whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.3 },
                         }}
                         exit={{ y: 700, scale: 0.4, opacity: 0.4, transition: { duration: 0.3 } }}

                        
                    >
                         <div className='card card-details'>

                              

                              <ul>
                                   <li><span>Name:</span>        <span>{prop.name}</span></li>
                                   <li><span>Plan number:</span> <span>{prop.plan}</span></li>
                                   {/* <li><span>Unit count:</span>  <span>{prop.units[0].id}</span></li> */}
                                   <li><span>City:</span>        <span>{prop.city}</span></li>

                                   

                              </ul>
                              <ul>
                                   <li><span>Region: </span> <span>{prop.region}</span></li>
                                   <li><span>Manager: </span> <span>{prop.manager}</span></li>
                                   <li><span>Plan Registered: </span> <span>{prop.planRegistered}</span></li>

                   
                              </ul>
                              <div className='container-buttons'>
                                   <div className='more-delete-button'>
                                        <motion.button onClick={() => {
                                             setEditUser(true)
                                        }}
                                             whileHover={{
                                                  scale: 1.1,
                                                  transition: { duration: 0.2 },
                                             }}
                                        >
                                             Edit
                                        </motion.button>
                                   </div>
                                   <div className='more-details-button'>
                                        <motion.button
                                             onClick={() => {
                                                  router.push('./')
                                             }}
                                             whileHover={{
                                                  scale: 1.1,
                                                  transition: { duration: 0.2 },
                                             }}
                                        >
                                             Back
                                        </motion.button>
                                   </div>
                              </div>
                         </div>
                    </motion.div>
                    )
               ))}
          </AnimatePresence>
     )
}

export default DetailsData