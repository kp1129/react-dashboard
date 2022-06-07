import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../images/logo.png'

import { SidebarData } from '../../data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

function Sidebar() {

    const [ selected, setSelected ] = useState(0);

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
            {SidebarData.map( (item, index) => (
                <div 
                onClick={() => setSelected(index)}
                className={selected === index ? "menu-item active" : "menu-item"} 
                key={item.heading}>
                    <div><item.icon/></div>
                    <span>{item.heading}</span>
                </div>
            ))}
            {/* sign out */}
            <div className='menu-item'>
                <div><UilSignOutAlt /></div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar