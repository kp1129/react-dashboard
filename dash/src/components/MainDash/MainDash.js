import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import './MainDash.css'

function MainDash() {
  return (
    <div className='main-dash'>
        <h1>Dashboard</h1>

        {/* cards */}
        <CardContainer />

        {/* recent orders */}
    </div>
  )
}

export default MainDash