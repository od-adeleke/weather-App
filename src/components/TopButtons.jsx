import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'Ibadan'
    },
    {
      id: 2,
      title: 'Akure'
    },
    {
      id: 3,
      title: 'Lagos'
    },
    {
      id: 4,
      title: 'Ile-ife'
    },
    {
      id: 5,
      title: 'Ikeja'
    }
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => {
        return (
        <button key={city.id} className='text-white text-lg font-medium'>
          {city.title}
        </button>
        )
      })}
    </div>
  )
}

export default TopButtons