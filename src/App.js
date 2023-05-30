import './App.css';
import Nav from './components/Nav';


function App() {
  console.log(process.env.REACT_APP_KEY)
  console.log(process.env.REACT_APP_HOST)
  return (
    <div className="App">
      <p>ליגת העל</p>
      <Nav />
    </div>
  );
}

export default App;
