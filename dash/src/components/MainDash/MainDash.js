import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import RecentOrders from '../RecentOrders/RecentOrders'
import './MainDash.css'

function MainDash() {
  return (
    <div className='main-dash'>
        {/* info cards */}
        <CardContainer />

        {/* recent orders */}
        <RecentOrders />
    </div>
  )
}

export default MainDash