import axios from "axios"

const satilikBungalov = 'http://localhost/eren-emlak/Backend/Php/bungalov.php?action=satilikbungalov'
const kiralikBungalov = 'http://localhost/eren-emlak/Backend/Php/bungalov.php?action=kiralikbungalov'


export const satilikBungalovFecth = async () => {
    const db = await axios.get(satilikBungalov)
    return db.data
}
export const satilikBungalovSil = async (id) => {
    const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/bungalov.php?action=satilikbungalovsil&id=${id}`)
    return db.data
}

export const satilikBungalovPost = async (item) => {
    const db = await axios.post("http://localhost/eren-emlak/Backend/Php/bungalov.php?action=satilikbungalovekle", item, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    console.log(db)
    return db.data
}
export const satilikBungalovEdit = async (id, values) => {
    const db = axios.post(`http://localhost/eren-emlak/Backend/Php/bungalov.php?action=satilikbungalovedit&id=${id}`, values,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    return db.data
}

export const kiralikBungalovFecth = async () => {
    const db = await axios.get(kiralikBungalov)
    return db.data
}

export const kiralikBungalovSil = async (id) => {
    const db = await axios.delete(`http://localhost/eren-emlak/Backend/Php/bungalov.php?action=kiralikbungalovsil&id=${id}`)
    return db.data
}

export const kiralikBungalovPost = async (item) => {
    const db = await axios.post("http://localhost/eren-emlak/Backend/Php/bungalov.php?action=kiralikbungalovekle", item, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    console.log(db)
    return db.data
}
export const kiralikBungalovEdit = async (id, values) => {
    const db = axios.post(`http://localhost/eren-emlak/Backend/Php/bungalov.php?action=kiralikbungalovedit&id=${id}`, values,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    return db.data
}