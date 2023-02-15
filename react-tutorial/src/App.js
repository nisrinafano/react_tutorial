//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome";
  const likes = 50;
  const link = "www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10+10}</p>
        <p>{ [1,2,3,4,5] }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
