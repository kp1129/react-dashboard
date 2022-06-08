import React from 'react'
import './Updates.css'

import { UpdatesData } from '../../data/Data';

function Updates() {
  return (
    <div className='updates'>
        { UpdatesData.map( update => (
            <div className='update'>
                <img alt="" src={update.img} />
                <div className='noti'>
                    <span>{update.name}</span>
                    <span>{update.noti}</span>
                    <span>{update.time}</span>
                </div> 
                {/* <div className='update-time'>
                    <span>{update.time}</span>
                </div>    */}
            </div>
        ))}
    </div>
  )
}

export default Updates