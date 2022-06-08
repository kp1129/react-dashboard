import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'
import { CardsData } from '../../data/Data'

function CardContainer() {
  return (
    <div className='card-container'>
        {CardsData.map( card => (
            <Card 
              key={card.title}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
        ))}
    </div>
  )
}

export default CardContainer