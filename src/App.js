import logo from './logo.svg';
import './App.css';

import BookData from './components/BookData';

function App() {
  const books = [
  {
    id:1,
    img : "https://images-na.ssl-images-amazon.com/images/I/41OiDvq9pDS._SX460_BO1,204,203,200_.jpg",
    title : 'The Complete Novels of Sherlock Holmes',
    author : 'Sir Arthur Conan Doyle'
  },
  
  {
    id:2,
    img : "https://images-eu.ssl-images-amazon.com/images/I/4180omRGrSL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title : 'You Can',
    author : 'George Matthew Adams '
  },

  {
    id:3,
    img : "https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL320_SR320,320_.jpg",
    title : 'As a Man Thinketh',
    author : 'James Allen'
  },
  
];
  return (
    <div className="App">
      <section className='grid grid-cols-3'>
        {books.map((book) => {
          return(
          <BookData key={book.id} value={book} />
          )
        })}
      </section>

    </div>
  );
}

export default App;
