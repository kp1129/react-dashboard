import React, { useState } from 'react'
import './Card.css'
import { UilTimes } from '@iconscout/react-unicons'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

function Card(props) {
  
    const [ expanded, setExpanded ] = useState(false);

    return (
        <AnimateSharedLayout>
            { expanded
                ? <ExpandedCard setExpanded={setExpanded} {...props}/>
                : <CompactCard setExpanded={setExpanded} {...props} />
            }
        </AnimateSharedLayout>
  )
}

// Expanded Card
function ExpandedCard({ png, series, value, barValue, title, color, setExpanded }) {

    const options = {
        chart: {
            type: "area",
            height: "auto",
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35
        },
        fill: {
            colors: ["fff"],
            type: "gradient",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["fff"],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            },
        },
        grid: {
            show: true,
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ],
        }
    }

    return (
        <motion.div className='expanded-card'
        style={{
            background: color.bg,
            boxShadow: color.boxShadow
        }}
        layoutId="expandableCard"
        >
            <div className='expanded-card-cancel'>
                <UilTimes onClick={() => setExpanded(false)}/>
            </div>
            <span>{title}</span>
            <div className='expanded-chart'>
                <Chart
                type="area"
                series={series}
                options={options}
                />
            </div>
            <span>Last 24 hours</span>

        </motion.div>
    )
}


// Compact Card 
function CompactCard({ png, value, barValue, title, color, setExpanded }) {
    const CardIcon = png;
    return (
        <motion.div className='compact-card'
        style={{
            background: color.bg,
            boxShadow: color.boxShadow
        }}
        layoutId="expandableCard"
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
        </motion.div>
    )
}


export default Card