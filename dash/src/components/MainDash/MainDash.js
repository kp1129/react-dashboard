import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Table from '../Table/Table'
import './MainDash.css'

function MainDash() {
  return (
    <div className='main-dash'>
        {/* info cards */}
        <CardContainer />

        {/* recent orders */}
        <Table />
    </div>
  )
}

export default MainDash