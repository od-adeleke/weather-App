import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Sunday, 30 October, 2022 | Local time: 9:25pm
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Ibadan, NG
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation