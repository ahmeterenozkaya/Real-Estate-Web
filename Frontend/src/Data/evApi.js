import axios from "axios"

const satilikEv = 'http://localhost/eren-emlak/Backend/Php/ev.php?action=satilikev'
const kiralikEv = 'http://localhost/eren-emlak/Backend/Php/ev.php?action=kiralikev'

export const satilikEvFecth = async () => {
    const db = await axios.get(satilikEv)
    console.log(db.data)
    return db.data
}
export const satilikEvPost = async (values) => {
    const db = await axios.post("http://localhost/eren-emlak/Backend/Php/ev.php?action=satilikevekle", values, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    },)
    return db.data
}
export const satilikEvSil = async (id) => {
    const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/ev.php?action=satilikevsil&id=${id}`)
    return db.data
}
export const satilikEvEdit = async (id, values) => {
    const db = await axios.post(`http://localhost/eren-emlak/Backend/Php/ev.php?action=satilikevedit&id=${id}`, values, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    return db.data
}

//************************************************** */

export const kiralikEvFecth = async () => {
    const db = await axios.get(kiralikEv)
    console.log(db.data)
    return db.data
}
export const kiralikEvPost = async (values) => {
    const db = await axios.post("http://localhost/eren-emlak/Backend/Php/ev.php?action=kiralikevekle", values, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    },)
    return db.data
}
export const kiralikEvSil = async (id) => {
    const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/ev.php?action=kiralikevsil&id=${id}`)
    return db.data
}
export const kiralikEvEdit = async (id, values) => {
    const db = await axios.post(`http://localhost/eren-emlak/Backend/Php/ev.php?action=kiralikevedit&id=${id}`, values, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    return db.data
}