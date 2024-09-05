import axios from "axios"
const satilikArsa = 'http://localhost/eren-emlak/Backend/Php/arsa.php?action=satilikarsa'
const kiralikArsa = 'http://localhost/eren-emlak/Backend/Php/arsa.php?action=kiralikarsa'
const kiralikArsaekle = 'http://localhost/eren-emlak/Backend/Php/arsa.php?action=kiralikarsaekle'
const satilikArsaekle = 'http://localhost/eren-emlak/Backend/Php/arsa.php?action=satilikarsaekle'
const admin = 'http://localhost/eren-emlak/Backend/Php/user.php?action=user'

export const FecthAdminLogin = async () => {
        const db = await axios.get(admin)
        return db.data
}
//! KİRALIK ARSA
export const kiralikArsaFecth = async () => {
        const db = await axios.get(kiralikArsa)
        return db.data
}

export const kiralikArsaPost = async (item) => {
        const db = await axios.post(kiralikArsaekle, item, {
                headers: {
                        'Content-Type': 'multipart/form-data',
                },
        })
        console.log(db)
        return db.data
}

export const kiralıkArsaSil = async (id) => {
        const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/arsa.php?action=kiraliarsaksil&id=${id}`)
        return db.data
}

export const kiralıkArsaEdit = async (id, value) => {
        const db = await axios.post(`http://localhost/eren-emlak/Backend/Php/arsa.php?action=kiraliarsaedit&id=${id}`, value, {
                headers: {
                        'Content-Type': 'multipart/form-data',
                }
        })
        return db.data
}
//! SATILIK ARSA
export const satilikArsaFecth = async () => {
        const db = await axios.get(satilikArsa)
        return db.data
}
export const satilikArsaPost = async (item) => {
        const db = await axios.post(satilikArsaekle, item, {
                headers: {
                        'Content-Type': 'multipart/form-data',
                },
        })
        console.log(db)
        return db.data
}
export const satilikArsaSil = async (id) => {
        const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/arsa.php?action=satilikarsasil&id=${id}`)
        return db.data
}
export const satilikArsaEdit = async (id, value) => {
        const db = await axios.post(`http://localhost/eren-emlak/Backend/Php/arsa.php?action=satilikarsaedit&id=${id}`, value, {
                headers: {
                        'Content-Type': 'multipart/form-data',
                }
        })
        return db.data
}