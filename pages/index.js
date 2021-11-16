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


// const json = [
//      {
//           "id": 0,
//           "name": "nameSof",
//           "plan": "plan number",
//           "units": [{
//                "id": 0,
//                "lotAlpha": "1",
//                "floor": 0,
//                "type": "Residential"
//           }],
//           "city": "Sofia",
//           "region": 1,
//           "manager": 0,
//           "previousManager": 0,
//           "managementCompany": "Some Company",
//           "planRegistered": "2020-12-12",
//           "address": "address",
//           "account": "acc",
//           "abn": "ABN"
//      },
//      {
//           "id": 2,
//           "name": "name2",
//           "plan": "plan number2",
//           "units": [{
//                "id": 0,
//                "lotAlpha": "2",
//                "floor": 2,
//                "type": "Residential2"
//           }],
//           "city": "Plovdiv",
//           "region": 2,
//           "manager": 2,
//           "previousManager": 0,
//           "managementCompany": "Some Company2",
//           "planRegistered": "2020-12-12",
//           "address": "address2",
//           "account": "acc2",
//           "abn": "ABN2"
//      },
//      {
//           "id": 3,
//           "name": "name3",
//           "plan": "plan number3",
//           "units": [{
//                "id": 0,
//                "lotAlpha": "2",
//                "floor": 2,
//                "type": "Residential2"
//           }],
//           "city": "Varna",
//           "region": 3,
//           "manager": 3,
//           "previousManager": 0,
//           "managementCompany": "Some Company2",
//           "planRegistered": "2020-12-12",
//           "address": "address2",
//           "account": "acc2",
//           "abn": "ABN2"
//      },
//      {
//           "id": 4,
//           "name": "name4",
//           "plan": "plan number4",
//           "units": [{
//                "id": 0,
//                "lotAlpha": "2",
//                "floor": 2,
//                "type": "Residential2"
//           }],
//           "city": "Plovdiv",
//           "region": 4,
//           "manager": 2,
//           "previousManager": 0,
//           "managementCompany": "Some Company2",
//           "planRegistered": "2020-12-12",
//           "address": "address2",
//           "account": "acc2",
//           "abn": "ABN2"
//      },
//      {
//           "id": 5,
//           "name": "name555",
//           "plan": "plan number4",
//           "units": [{
//                "id": 0,
//                "lotAlpha": "2",
//                "floor": 2,
//                "type": "Residential2"
//           }],
//           "city": "Plovdiv",
//           "region": 5,
//           "manager": 2,
//           "previousManager": 0,
//           "managementCompany": "Some Company2",
//           "planRegistered": "2020-12-12",
//           "address": "address2",
//           "account": "acc2",
//           "abn": "ABN2"
//      }
// ]