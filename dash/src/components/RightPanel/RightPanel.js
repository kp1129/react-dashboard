import React from 'react'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import Updates from '../Updates/Updates'
import './RightPanel.css'

function RightPanel() {
  return (
    <div className='right-panel'>
        <Updates />
        <CustomerReviews />
    </div>
  )
}

export default RightPanel