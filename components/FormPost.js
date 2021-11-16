import { useState } from 'react'
import { motion } from 'framer-motion'

const FormPost = ({ getTheData, setCreateUser }) => {

     const URL = 'http://localhost:3000/properties'
     const [dataFormPost, setDataFormPost] = useState({
          name: '',
          plan: '',
          // units: [
          //      {
          //           id: 0,
          //           lotAlpha: 0,
          //           floor: 0,
          //           type: ''
          //      }
          // ],
          city: '',
          region: 0,
          manager: 0,
          previousManager: 0,
          managementCompany: '',
          planRegistered: '',
          address: '',
          account: '',
          abn: ''
     })

     const createHandler = (dataJSON) => {

          const option = {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(dataJSON),
          }

          fetch(URL, option)
               .then(getTheData())
               .then(res => { console.log('CREATE', 'status:', res.status, "status text", res.statusText) })
               .catch(err => { console.log(err) })
     }


     const handleChange_name = (e) => { setDataFormPost({ ...dataFormPost, name: e.target.value }) }
     const handleChange_plan = (e) => { setDataFormPost({ ...dataFormPost, plan: e.target.value }) }


     const handleChange_city = (e) => { setDataFormPost({ ...dataFormPost, city: e.target.value }) }
     const handleChange_region = (e) => { setDataFormPost({ ...dataFormPost, region: e.target.value }) }
     const handleChange_manager = (e) => { setDataFormPost({ ...dataFormPost, manager: e.target.value }) }
     const handleChange_previousManager = (e) => { setDataFormPost({ ...dataFormPost, previousManager: e.target.value }) }
     const handleChange_managementCompany = (e) => { setDataFormPost({ ...dataFormPost, managementCompany: e.target.value }) }
     const handleChange_planRegistered = (e) => { setDataFormPost({ ...dataFormPost, planRegistered: e.target.value }) }
     const handleChange_address = (e) => { setDataFormPost({ ...dataFormPost, address: e.target.value }) }
     const handleChange_account = (e) => { setDataFormPost({ ...dataFormPost, account: e.target.value }) }
     const handleChange_abn = (e) => { setDataFormPost({ ...dataFormPost, abn: e.target.value }) }

     return (
          <motion.div
               initial={{ opacity: 0.5, y: -105, scale: 1.75 }}
               animate={{ opacity: 1, y: 0, scale: 1, stiffness: 500 }}
               exit={{ opacity: 0.5 }}
               transition={{ duration: 0.3 }}
          >
               <h1>Create new customer</h1>
               {console.log(dataFormPost)}

               <div className='container-edit-create-cancel-button'>

                    <motion.button
                         className='button-reset'
                         onClick={() => { setCreateUser(false) }}
                         whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 },
                         }}
                    >
                         Cancel
                    </motion.button>
               </div>

               <div className='form-container'>
                    <form className='form'>
                         <label>
                              <div>name:</div>
                              <input
                                   onChange={handleChange_name}
                                   value={dataFormPost.name}
                                   placeholder='Name'
                                   name='Name'
                              />
                         </label>

                         <label>
                              <div>plan:</div>
                              <input
                                   onChange={handleChange_plan}
                                   value={dataFormPost.plan}
                                   placeholder='Plan'
                                   name='Plan'
                              />
                         </label>
                         {/* <label>
                         units:
                         <input />
                    </label> */}
                         <label>
                              <div>city:</div>
                              <input
                                   onChange={handleChange_city}
                                   value={dataFormPost.city}
                                   placeholder='city'
                                   name='city'
                              />
                         </label>
                         <label>
                              <div>region:</div>
                              <input
                                   type='number'
                                   onChange={handleChange_region}
                                   value={dataFormPost.region}
                                   placeholder='region'
                                   name='region'
                              />
                         </label>
                         <label>
                              <div>manager:</div>
                              <input
                                   type='number'
                                   onChange={handleChange_manager}
                                   value={dataFormPost.manager}
                                   placeholder='manager'
                                   name='manager'
                              />
                         </label>
                         <label>
                              <div>previousManager:</div>
                              <input
                                   type='number'
                                   onChange={handleChange_previousManager}
                                   value={dataFormPost.previousManager}
                                   placeholder='previousManager'
                                   name='previousManager'
                              />
                         </label>
                         <label>
                              <div>managementCompany:</div>
                              <input
                                   onChange={handleChange_managementCompany}
                                   value={dataFormPost.managementCompany}
                                   placeholder='managementCompany'
                                   name='managementCompany'
                              />
                         </label>
                         <label>
                              <div>planRegistered:</div>
                              <input
                                   onChange={handleChange_planRegistered}
                                   value={dataFormPost.planRegistered}
                                   placeholder='planRegistered'
                                   name='planRegistered'
                              />
                         </label>
                         <label>
                              <div>address:</div>
                              <input
                                   onChange={handleChange_address}
                                   value={dataFormPost.address}
                                   placeholder='address'
                                   name='address'
                              />
                         </label>
                         <label>
                              <div>account:</div>
                              <input
                                   onChange={handleChange_account}
                                   value={dataFormPost.account}
                                   placeholder='account'
                                   name='account'
                              />
                         </label>
                         <label>
                              <div>abn:</div>
                              <input
                                   onChange={handleChange_abn}
                                   value={dataFormPost.abn}
                                   placeholder='abn'
                                   name='abn' />
                         </label>


                    </form>
               </div>

               <div className='container-post-reset-buttons'>
                    <motion.button
                         className='button-post'
                         onClick={() => {
                              createHandler(dataFormPost),
                                   setCreateUser(false)
                         }}
                         whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 },
                         }}
                    >
                         Submit
                    </motion.button>
               </div>
          </motion.div>
     )
}

export default FormPost