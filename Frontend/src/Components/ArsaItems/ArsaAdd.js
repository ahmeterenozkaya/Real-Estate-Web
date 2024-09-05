import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { arsaShema } from '../../Hook/Yup'

function ArsaAdd({ fecth, go }) {
  const initialValues = {
    ilan_no: "",
    ilan_m2: "",
    imarli_mi: "",
    fiyati: "",
    ada: "",
    parsel: "",
    adress: "",
    satilik_durumu: "",
    telefon: "",
    resim: null
  };

  const goPage = (go) => {
    if (go) {
      console.log(go)
      window.location.href = `http://localhost:3000/${go}`
    } else {
      console.log("böyle bir sayfa yok")
    }
  }
  const handleSubmit = async (values, { setSubmitting }) => {

    const postArsa = async () => {
      const postDb = await fecth(values)
      console.log(postDb)
    }
    postArsa()
    goPage("advert")
    setSubmitting(false)
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={arsaShema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form method="POST" encType="multipart/form-data" >
            <div className='flex m-12 justify-between items-start gap-12'>
              <div className='flex flex-col gap-3'>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='ilan_no'>İlan No</label>
                  <Field type="text" name="ilan_no" id="ilan_no" />
                  <ErrorMessage name='ilan_no' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='ilan_m2'>İlan M2</label>
                  <Field type="text" name="ilan_m2" id="ilan_m2" />
                  <ErrorMessage name='ilan_m2' component="div" />
                </div>
                <div className='flex flex-col justify-start items-start'>
                  <label htmlFor='imarli_mi'>İmarlı </label>
                  <div >
                    <label>
                      Evet
                      <Field type="radio" value={"1"} id="imarli_mi" name="imarli_mi" /></label>
                    <label>
                      Hayir
                      <Field type="radio" value={"0"} id="imarli_mi" name="imarli_mi" />
                    </label>
                  </div>
                  <ErrorMessage name='imarli_mi' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='fiyati'>fiyati</label>
                  <Field type="text" name="fiyati" id="fiyati" />
                  <ErrorMessage name='fiyati' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='ada'>ada</label>
                  <Field type="text" name="ada" id="ada" />
                  <ErrorMessage name='ada' component="div" />
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='telefon'>telefon</label>
                  <Field type="text" name="telefon" id="telefon" />
                  <ErrorMessage name='telefon' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='parsel'>parsel</label>
                  <Field type="text" name="parsel" id="parsel" />
                  <ErrorMessage name='parsel' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='satilik_durumu'>satilik_durumu</label>
                  <div className='flex justify-center items-center gap-1'>
                    <label>Evet
                      <Field type="radio" value={"1"} id="satilik_durumu" name="satilik_durumu" />
                    </label>
                    <label>Hayir
                      <Field type="radio" value={"0"} id="satilik_durumu" name="satilik_durumu" />
                    </label>
                  </div>
                  <ErrorMessage name='satilik_durumu' component="div" />
                </div>
                <div className='flex-col flex gap-4'>
                  <label htmlFor='adress'>adress</label>
                  <Field type="text" id="adress" name="adress" />
                  <ErrorMessage name='adress' component="div" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="resim">Resim Yükle</label>
              <input
                type="file"
                id="resim"
                name="resim"
                onChange={(event) => {
                  setFieldValue('resim', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="resim" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Gönder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ArsaAdd
