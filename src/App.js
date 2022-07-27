import logo from './logo.svg';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div className="App grid grid-cols-4">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </div>
  );
}

export default App;
