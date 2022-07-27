import React from 'react'
import Author from './Author'
import Image from './Image'
import Title from './Title'

const Book = () => {
  return (
    <div className='bg-white p-2 m-3 rounded-md'>
        <div>
        <Image/>
        <Title/>
        <Author/>
        </div>
    </div>
  )
}

export default Book