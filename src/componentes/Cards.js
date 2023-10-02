import React from 'react'
import Card from './Card'
import image1 from "../assets/moto1.jpg"
import image2 from "../assets/moto2.jpg"
import image3 from "../assets/moto3.jpg"

const cards = [
  {
    id: 1,
    title: 'Moto1',
    image: image1,
    instructor: "Benito Samuel"
  }, 
  {
    id: 2,
    title: 'Moto2',
    image: image2,
    instructor: "Jair"
  },
  {
    id: 3,
    title: 'Moto3',
    image: image3,
    instructor: "José Roberto"
  },
]


export default function Cards(){
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c=>(
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
              </div>
          ))
        }
      </div>
    </div>
  );
}