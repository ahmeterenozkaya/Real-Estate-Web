import { useEffect, useState } from "react"

export const Auth = () => {
    const [login, setLogin] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    )
    const onLogin = () => {
        setLogin(true)
    }
    const outLogin = () => {
        localStorage.removeItem('isLoggedIn');
        setLogin(false)
    }
    useEffect(() => {
        setLogin(localStorage.getItem('isLoggedIn') === 'true')
    }, [])
    return {
        login,
        onLogin,
        outLogin
    }
}