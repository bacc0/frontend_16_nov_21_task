import { useState, useEffect, Fragment, useContext } from 'react'
import { motion } from 'framer-motion'
import { DataContext } from '../context/DataContext'
import Card from '../components/Card'
import Inputs from '../components/Inputs'
import FormPost from '../components/FormPost'


export default function Home() {

     const URL = 'http://localhost:3000/properties'

     const [properties, setProperties] = useContext(DataContext)

     const [name, setName] = useState('')
     const [plan, setPlan] = useState('')
     const [region, setRegion] = useState(-1)
     const [createUser, setCreateUser] = useState(false)

     const getTheData = () => {
          setProperties([])
          setTimeout(() => {
               fetch(URL)
                    .then(response => response.json())
                    .then(data => setProperties(data))
                    .catch(err => { console.log(err) })
          }, 10)
     }
     useEffect(() => {
          getTheData()
     }, [])

     const deleteHandler = (id) => {
          if (window.confirm('Are you sure, you want to delete?')) {

               fetch(`${URL}/${id}`, {
                    method: 'DELETE'
               })
                    .then(getTheData())
                    .then(res => { console.log('DELETE', 'status:', res.status, 'status text', res.statusText) })
                    .catch(err => { console.log(err) })
          }
     }

     const resetting = () => {
          setName('')
          setPlan('')
          setRegion(-1)
     }

     return (
          <Fragment>
               {!createUser && (
                    <motion.div
                         initial={{ opacity: 0.5, y: -25, scale: 1.05 }}
                         animate={{ opacity: 1, y: 0, scale: 1, stiffness: 500 }}
                         exit={{ opacity: 0.5 }}
                         transition={{ duration: 0.3 }}
                    >
                         <h1>List of properties</h1>
                         <h3>(Page 1)</h3>
                         {/* <h3>prop.units[0]</h3> */}

                         <div className='container-post-reset-buttons'>
                              <motion.button
                                   className='button-post'
                                   onClick={ () => { setCreateUser(true) }}
                                   whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                   }}
                              >
                                   Create
                              </motion.button>
                              <motion.button
                                   className='button-reset'
                                   onClick={() => { resetting() }}
                                   whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                   }}
                              >
                                   Reset
                              </motion.button>
                         </div>
                         <Inputs
                              setName={setName}
                              setPlan={setPlan}
                              region={region}
                              setRegion={setRegion}
                         />
                         <Card
                              plan={plan}
                              name={name}
                              region={region}
                              properties={properties}
                              deleteHandler={deleteHandler}
                         />
                    </motion.div >
               )}
               {createUser && (
                    <FormPost
                         getTheData={getTheData}
                         setCreateUser={setCreateUser}
                    />
               )}
          </Fragment>
     )
}
