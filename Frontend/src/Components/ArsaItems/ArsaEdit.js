import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { arsaShema } from '../../Hook/Yup'
import { useParams } from 'react-router-dom';

function ArsaEdit({ fecth, go, editApi }) {
  const { id } = useParams()
  const [item, setItem] = useState()
  useEffect(() => {
    const EditArsa = async () => {
      try {
        const db = await fecth()
        const itemSelect = db.find(item => item.id = id)
        setItem(itemSelect)
      } catch (error) {
        console.log(error)
      }
    }
    EditArsa()
  }, [fecth, id])

  const initialValues = {
    ilan_no: "",
    ilan_m2: "",
    imarli_mi: "",
    fiyati: "",
    ada: "",
    parsel: "",
    adress:"",
    satilik_durumu: "",
    telefon:"",
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
  console.log(values,id)
   
    const postArsa = async () => {
      const postDb = await editApi(id, values)
      console.log(postDb)
       goPage("advert")

    }
    postArsa()

    setSubmitting(false)
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={arsaShema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting, setFieldValue }) => (item &&
          <Form method="POST" encType="multipart/form-data" className='pt-96 flex justify-center items-center p-12'>
            <div>
              <label htmlFor='ilan_no'>ilan_no</label>
              <Field type="text" name="ilan_no" id="ilan_no" placeholder={item.ilan_no} />
              <ErrorMessage name='ilan_no' component="div" />
            </div>
            <div>
              <label htmlFor='ilan_m2'>ilan_m2</label>
              <Field type="text" name="ilan_m2" id="ilan_m2" placeholder={item.ilan_m2} />
              <ErrorMessage name='ilan_m2' component="div" />
            </div>
            <div>
              <label htmlFor='imarli_mi'>imarli_mi</label>
              <Field type="radio" value={"1"} id="imarli_mi" name="imarli_mi" placeholder={item.imarli_mi} />
              <Field type="radio" value={"0"} id="imarli_mi" name="imarli_mi" />
              <ErrorMessage name='imarli_mi' component="div" />
            </div>
            <div>
              <label htmlFor='fiyati'>fiyati</label>
              <Field type="text" name="fiyati" id="fiyati" placeholder={item.fiyati} />
              <ErrorMessage name='fiyati' component="div" />
            </div>
            <div>
              <label htmlFor='ada'>ada</label>
              <Field type="text" name="ada" id="ada" placeholder={item.ada} />
              <ErrorMessage name='ada' component="div" />
            </div>
            <div>
              <label htmlFor='telefon'>telefon</label>
              <Field type="text" name="telefon" id="telefon" placeholder={item.telefon} />
              <ErrorMessage name='telefon' component="div" />
            </div>
            <div>
              <label htmlFor='parsel'>parsel</label>
              <Field type="text" name="parsel" id="parsel" placeholder={item.parsel} />
              <ErrorMessage name='parsel' component="div" />
            </div>
            <div>
              <label htmlFor='satilik_durumu'>satilik_durumu</label>
              <Field type="radio" value={"1"} id="satilik_durumu" name="satilik_durumu" />
              <Field type="radio" value={"0"} id="satilik_durumu" name="satilik_durumu" />
              <ErrorMessage name='satilik_durumu' component="div" />
            </div>
            <div>
              <label htmlFor='adress'>adress</label>
              <Field type="text"  id="adress" name="adress" />
              <ErrorMessage name='adress' component="div" />
            </div>
            <div>
              <label htmlFor="resim">Resim Yükle</label>
              <img alt='resim' src={`http://localhost/eren-emlak/Backend/Php/${item.resim}`} />
              <input
                type="file"
                id="resim"
                name="resim"
                placeholder={item.resim}
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

export default ArsaEdit
