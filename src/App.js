import logo from './logo.svg';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book title="random title" number={22}/>
    </div>
  );
}

export default App;
