import { useState } from 'react'
import DetailsData from '../components/DetailsData'
import FormEdit from '../components/FormEdit'
import { motion } from 'framer-motion'

export default function Home() {

     const [editUser, setEditUser] = useState(false)

     return (
          <motion.div
               initial={{ opacity: 0.5, y: -25, scale: 1.1 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0.5 }}
               transition={{ duration: 0.3 }}
          >

               {!editUser && (
                    <motion.div
                         initial={{ opacity: 0.5, y: -65, scale: 1.05 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         exit={{ opacity: 0.5 }}
                         transition={{ duration: 0.4 }}
                    >
                         <h1>Property details page</h1>
                         <h3>(Page 2)</h3>
                         <div className='details-card-separator' />
                         <DetailsData setEditUser={setEditUser} />
                    </motion.div>
               )}

               {editUser && (
                    <FormEdit setEditUser={setEditUser} />
               )}
          </motion.div>
     )
}