import React from 'react'
import { useState, useEffect } from 'react';
import VanDetail from './VanDetail';
import { Link } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  console.log(vans)

  let elements = vans.map(van => (
          <div className='p-10'>
            <Link to={`/vans/${van.id}`} >
              <img src={van.imageUrl} alt="kgkj" className='border rounded-lg'/>
              <h1 className='font-bold text-xl pt-5'>{van.name}</h1>
              <div className='pt-5'>
                <h1 className='mb-5'>{`$${van.price}/day`}</h1>
                <a className='bg-[#E17654] py-1 px-6 text-white border rounded-md'>{van.type}</a>
              </div>
            </Link>
          </div>
  ))

  return (
    

    <div className='p-8 grid grid-cols-2 justify-center'>
        {elements}
    </div>
  
    )
}

export default Vans