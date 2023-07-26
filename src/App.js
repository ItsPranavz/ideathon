import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Societies from './Components/Societies';
import About from './Components/About';
import Contribute from './Components/Contribute';
import FAQ from './Components/FAQ';
import Resource from './Components/Resource';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path="/about" Component={About}/>
            <Route exact path="/resources" Component={Resource}/>
            <Route exact path="/societies" Component={Societies}/>
            <Route exact path="/contribute" Component={Contribute}/>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/faqs" Component={FAQ}/>
          </Routes>
          <Footer/>
        </>
      </Router>
    </>
  );
}

export default App;
