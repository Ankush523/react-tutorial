import React from 'react'



const Book = () => {

  const firstBook = {
    img : "https://images-na.ssl-images-amazon.com/images/I/41OiDvq9pDS._SX460_BO1,204,203,200_.jpg",
    title : 'The Complete Novels of Sherlock Holmes',
    author : 'Arthur Conan Doyle'
  };
  
  return (
    <div className='flex flex-col items-center  bg-white rounded-md'>
        <img className='w-[200px] h-[200px]' src={firstBook.img} alt=""/>
        <h1>{firstBook.title}</h1>
        <h3>{firstBook.author}</h3>   
    </div>
  )
}

export default Book