import React, { useState } from 'react'
import './Card.css'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Card(props) {
  
    const [ expanded, setExpanded ] = useState(false);

    return (
        <AnimateSharedLayout>
            { expanded
                ? <ExpandedCard setExpanded={setExpanded} {...props}/>
                : <CompactCard setExpanded={setExpanded} {...props} />
            }
        </AnimateSharedLayout>
        // <AnimateSharedLayout>
            // {/* { expanded 
            //     ? <ExpandedCard props={props} /> 
            //     : <CompactCard props={props} />
            // } */}
        //     <CompactCard props={props} />
        // </AnimateSharedLayout>
  )
}

// Expanded Card
function ExpandedCard({ png, value, barValue, title, color, setExpanded }) {
    return (
        <div className='expanded-card'

        onClick={() => setExpanded(false)}
        >expanded</div>
    )
}


// Compact Card 
function CompactCard({ png, value, barValue, title, color, setExpanded }) {
    const CardIcon = png;
    return (
        <div className='compact-card'
        style={{
            background: color.bg,
            boxShadow: color.boxShadow
        }}
        onClick={() => setExpanded(true)}
        >
            <div className='radial-bar'>
                <CircularProgressbar value={barValue} text={`${barValue}%`} />
                <span>{title}</span>
            </div>
            <div className='card-info'>
                <CardIcon />
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}


export default Card