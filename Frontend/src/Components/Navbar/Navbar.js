import React from 'react'
import { data } from '../../Data/data'
import { Link } from 'react-router-dom'
import "./navbar.css"
import HoverMenuButton from '../HoverMenu/HoverMenuButton'
function Navbar() {
    return (
        <nav>
            <Link to={"/"} >
                <img src={data.img.logo} alt={data.logo} />
            </Link>
            <div className='navbar'>
                <Link to={"/"} >
                    <div>
                        Anasayfa
                    </div>
                </Link>
                <HoverMenuButton/>
                <Link to={"/about"}>
                    Hakkımızda
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
