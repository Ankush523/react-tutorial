import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import BookData from './components/BookData';

function App() {

  const firstBook = {
    img : "https://images-na.ssl-images-amazon.com/images/I/41OiDvq9pDS._SX460_BO1,204,203,200_.jpg",
    title : 'The Complete Novels of Sherlock Holmes',
    author : 'Sir Arthur Conan Doyle'
  };

  return (
    <div className="App">
      <Book/>
      <BookData value={firstBook} />
    </div>
  );
}

export default App;
