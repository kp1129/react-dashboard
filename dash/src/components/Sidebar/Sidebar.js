import React from 'react'
import './Sidebar.css'
import Logo from '../../images/logo.png'

import { UilEstate } from '@iconscout/react-unicons';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="Shops company logo"></img>
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}
        <div className='menu'>
            <div className='menu-item'>
                <div><UilEstate/></div>
                <span>dashboard</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar