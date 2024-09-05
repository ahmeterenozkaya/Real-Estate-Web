import React, { useEffect, useState } from 'react'
import { evShema } from '../../Hook/Yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';

function BungalovEdit({ fecth, go, editApi }) {
    const { id } = useParams()
    const [item, setItem] = useState()
    
    const initialValues = {
        ilan_no: "",
        ilan_m2: "",
        oda_sayisi: "",
        esyali_mi: "",
        isinma_tipi: "",
        cephe: "",
        kat: "",
        adress: "",
        banyo_sayisi: "",
        fiyati: "",
        telefon: "",
        satilik_durumu: "",
        resim: null
    };

    useEffect(() => {
        const fecthApi = async () => {
            try {
                const db = await fecth()
                const filter = db.find(item => item.id = id)
                setItem(filter)
            } catch (error) {
                console.log(error)
            }
        }
        fecthApi()
    }, [fecth, id])

    const goPage = (go) => {
        if (go) {
            console.log(go)
            window.location.href = `http://localhost:3000/${go}`
        } else {
            console.log("böyle bir sayfa yok")
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values)
        const postArsa = async () => {
            const postDb = await editApi(id, values)
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
                validationSchema={evShema}
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
                            <label htmlFor='oda_sayisi'>oda_sayisi</label>
                            <Field type="text" name="oda_sayisi" id="oda_sayisi" placeholder={item.oda_sayisi} />
                            <ErrorMessage name='oda_sayisi' component="div" />
                        </div>
                        <div>
                            <label htmlFor='fiyati'>fiyati</label>
                            <Field type="text" name="fiyati" id="fiyati" placeholder={item.fiyati} />
                            <ErrorMessage name='fiyati' component="div" />
                        </div>
                        <div>
                            <label htmlFor='esyali_mi'>esyali_mi</label>
                            <Field type="text" name="esyali_mi" id="esyali_mi" placeholder={item.esyali_mi} />
                            <ErrorMessage name='esyali_mi' component="div" />
                        </div>
                        <div>
                            <label htmlFor='telefon'>telefon</label>
                            <Field type="text" name="telefon" id="telefon" placeholder={item.telefon} />
                            <ErrorMessage name='telefon' component="div" />
                        </div>
                        <div>
                            <label htmlFor='kat'>kat</label>
                            <Field type="text" name="kat" id="kat" placeholder={item.kat} />
                            <ErrorMessage name='kat' component="div" />
                        </div>
                        <div>
                            <label htmlFor='adress'>adress</label>
                            <Field type="text" name="adress" id="adress" placeholder={item.adress} />
                            <ErrorMessage name='adress' component="div" />
                        </div>
                        <div>
                            <label htmlFor='isinma_tipi'>isinma_tipi</label>
                            <Field type="text" name="isinma_tipi" id="isinma_tipi" placeholder={item.isinma_tipi} />
                            <ErrorMessage name='isinma_tipi' component="div" />
                        </div>
                        <div>
                            <label htmlFor='cephe'>cephe</label>
                            <Field type="text" name="cephe" id="cephe" placeholder={item.cephe} />
                            <ErrorMessage name='cephe' component="div" />
                        </div>
                        <div>
                            <label htmlFor='banyo_sayisi'>banyo_sayisi</label>
                            <Field type="text" name="banyo_sayisi" id="banyo_sayisi" placeholder={item.banyo_sayisi} />
                            <ErrorMessage name='banyo_sayisi' component="div" />
                        </div>
                        <div>
                            <label htmlFor='satilik_durumu'>satilik_durumu</label>
                            <Field type="text" name="satilik_durumu" id="satilik_durumu" placeholder={item.satilik_durumu} />
                            <ErrorMessage name='satilik_durumu' component="div" />
                        </div>
                        <div>
                            <label htmlFor="resim">Resim Yükle</label>
                            <img src={`http://localhost/eren-emlak/Backend/Php/${item.resim}`} alt={item.resim} />
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
    )
}

export default BungalovEdit
