import React, { useEffect, useState } from 'react'
import { FecthAdminLogin } from '../../../Data/arsaApi'
import { signinShema } from '../../../Hook/Yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import "./Signin.css"

function Signin({ login }) {
  const [user, setUser] = useState()

  useEffect(() => {
    const fecthAdmin = async () => {
      try {
        const admin = await FecthAdminLogin()
        setUser(admin)
      }
      catch (error) {
        console.log(error)
      }
    }
    fecthAdmin()
  }, [])

  const handleSubmit = (values) => {
    if (user) {
      for (let i = 0; i < user.length; i++) {
        if (user[i].userName === values.username && user[i].userPassword === values.password) {
          localStorage.setItem('isLoggedIn', 'true')
          login()
        }

      }
    }
  }

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <div className='signin'>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signinShema}
      >
        <Form >
        <h1 className=' top-1 text-7xl pb-12 text-red-600'>EV<span className='text-black'>VE  TİCARİ</span> </h1>
        <h4 className='uppercase font-thin italic mt-[-3rem] mb-12 text-black'>Yatırım & Proje geliştirme</h4>

          <label htmlFor="username">Kullanıcı Adı:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" className='text-black'/>
          <label htmlFor="password">Şifre:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className='text-black' />
          <button type="submit">Giriş</button>

        </Form>

      </Formik>
      <div className='w-1/2'>
        <img src={process.env.PUBLIC_URL + "/Assets/home.png"} alt='' />
      </div>
    </div>
  )
}

export default Signin
