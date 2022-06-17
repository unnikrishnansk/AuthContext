
import './App.css';
import Meals from './components/Meals';
import Navbar from './components/Navbar';
import Startorder from './components/Startorder';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Startorder />
      <Welcome />
      <Meals />
    </div>
  );
}

export default App;
