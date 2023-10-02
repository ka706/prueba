import React from 'react'
import './card.css'
export default function Card({id, title, image, instructor}){
  return (
    <div className='card text-center bg-dark'>
      <div className='car-body text-light'>
       <img src={image} alt="" className='card-img-top'/>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Intructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-3'>
          Ir al sitio Web
        </a>
         </div>
    </div>
  )
}