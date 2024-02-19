import './style.css';
import Navbar from "./Component/Navbar/navbar";
import Intro from './Component/Intro/Intro';
import About from './Component/About/About';
import Education from './Education/Education';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About/>
    <Education/>
    </div>
  );
}

export default App;
