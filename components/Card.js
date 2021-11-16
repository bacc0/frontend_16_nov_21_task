import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { IdContext } from '../context/IdContext'

const Card = ({ properties, name, region, plan, deleteHandler }) => {

     const [currentId, setCurrentId] = useContext(IdContext)

     const router = useRouter()
     return (
          <AnimatePresence>
               {properties
                    .filter(prop => {
                         if (region === -1) {
                              return prop.name.toLowerCase().includes(name.toLowerCase())
                                   &&
                                   prop.plan.toLowerCase().includes(plan.toLowerCase())
                         } else {
                              return prop.name.toLowerCase().includes(name.toLowerCase())
                                   &&
                                   prop.plan.toLowerCase().includes(plan.toLowerCase())
                                   &&
                                   prop.region.toString().includes(region.toString())
                                   // prop.region.toString() === region
                         }
                    })
                    .map((prop, i) => (
                         <motion.div
                              key={i}
                              className='card-container'
                              initial={{ opacity: 0.5, scale: 0.9, y: 14 }}
                              animate={{ opacity: 1, scale: 1, y: 0, delay: 0.1 }}
                              transition={{ stiffness: 5, duration: 0.2 }}
                              whileHover={{
                                   scale: 1.02,
                                   transition: { duration: 0.3 },
                              }}
                              exit={{ y: 700, scale: 0.4, opacity: 0.4, transition: { duration: 0.3 } }}
                         >
                              <div className='card'>

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
                                             <motion.button
                                                  onClick={() => {
                                                       deleteHandler(prop.id)
                                                  }}
                                                  whileHover={{
                                                       scale: 1.1,
                                                       transition: { duration: 0.2 },
                                                  }}
                                             >
                                                  Delete
                                             </motion.button>
                                        </div>
                                        <div className='more-details-button'>
                                             <motion.button onClick={() => {
                                                  setCurrentId(prop.id),
                                                       router.push('./details')
                                             }}
                                                  whileHover={{
                                                       scale: 1.1,
                                                       transition: { duration: 0.2 },
                                                  }}
                                             >
                                                  Details
                                             </motion.button>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    ))}
          </AnimatePresence>
     )
}

export default Card