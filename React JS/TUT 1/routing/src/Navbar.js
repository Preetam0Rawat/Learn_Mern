import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav style={{padding : 80}}>
                <Link to='/' style={{padding : 20}}>Home</Link>
                <Link to='/contact' style={{padding : 20}}>Contact</Link>
                <Link to='/submit' style={{padding : 20}}>Submit</Link>
            </nav>
        </div>
    )
}

export default Navbar
