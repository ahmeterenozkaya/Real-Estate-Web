
import * as Yup from 'yup'

export const signinShema = Yup.object().shape({
    username: Yup.string().required("Lüften doldurunuz"),
    password: Yup.string().required("Lütfen doldurunuz")
})


export const arsaShema = Yup.object().shape({
    ilan_no: Yup.number().required("Sayı giriniz"),
    ilan_m2: Yup.number().required("Sayı giriniz"),
    imarli_mi: Yup.number().required("Sayı giriniz"),
    fiyati: Yup.number().required("Sayı giriniz"),
    ada: Yup.number().required("Sayı giriniz"),
    parsel: Yup.number().required("Sayı giriniz"),
    satilik_durumu: Yup.number().required("Sayı giriniz"),
    resim: Yup.mixed().required("Sayı giriniz"),
    adress: Yup.string().required("Sayı giriniz"),
    telefon: Yup.string().required("Sayı giriniz"),
})

export const evShema = Yup.object().shape({
    ilan_no: Yup.number().required("Sayı giriniz"),
    ilan_m2: Yup.number().required("Sayı giriniz"),
    oda_sayisi: Yup.number().required("Sayı giriniz"),
    esyali_mi: Yup.string().required("Sayı giriniz"),
    isinma_tipi: Yup.string().required("Sayı giriniz"),
    cephe: Yup.string().required("Sayı giriniz"),
    kat: Yup.string().required("Sayı giriniz"),
    adress: Yup.string().required("Sayı giriniz"),
    banyo_sayisi: Yup.string().required("Sayı giriniz"),
    fiyati: Yup.number().required("Sayı giriniz"),
    telefon: Yup.string().required("Sayı giriniz"),
    satilik_durumu: Yup.number().required("Sayı giriniz"),
    resim: Yup.mixed().required("Sayı giriniz")
})
