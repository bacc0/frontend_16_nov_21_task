import { Fragment } from 'react'
import { motion } from 'framer-motion'

const Inputs = ({ setName, setRegion, setPlan }) => {

     return (
          <Fragment>
               <motion.div
                    className='inputs-container'
                    initial={{ opacity: 0.1, scale: 1.2, y: -54 }}
                    animate={{ opacity:   1, scale:   1, y:  0, delay: 0.1  }}
                    transition={{ stiffness: 100, duration: 0.2 }}
               >
                    <input
                         type='text'
                         placeholder='Name'
                         onChange={(e) => {
                              setName(e.target.value)
                         }}
                    />
                    <input
                         type='text'
                         placeholder='Plan'
                         onChange={(e) => {
                              setPlan(e.target.value)
                         }}
                    />
                    <input
                         type='text'
                         placeholder='Region'
                         onChange={(e) => {
                              setRegion(
                                   e.target.value > 0
                                        ? e.target.value
                                        : -1
                              )
                         }}
                    />
               </motion.div>
          </Fragment>
     )
}

export default Inputs