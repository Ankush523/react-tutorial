import React from 'react';

const BookData = ({value}) => {
    const buttonHandler = () => {
        alert('Hello World');
    }
    return ( 
        <div className='flex flex-col items-center bg-white rounded-xl m-8 p-5'>
            <img className='w-[200px] h-[200px]' src={value.img} alt=""/>
            <h1>{value.title}</h1>
            <h3>{value.author}</h3>
            <button onClick={buttonHandler}>Click</button>
        </div>
     );
}
 
export default BookData;