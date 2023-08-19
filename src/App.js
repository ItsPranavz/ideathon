import logo from './logo.svg';
import { Faqs } from './Components/assets/faq-questions';
import { clubs } from './Components/assets/clubs-societies-info';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Societies from './Components/Societies';
import About from './Components/About';
import Contribute from './Components/Contribute';
import FAQ from './Components/FAQ';
import Resource from './Components/Resource';
import Home from './Components/Home';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore();

async function fetchFaqData() {
  const snapshot = await getDocs(collection(db, 'contribute-page-faq'));
  snapshot.forEach((doc)=>{
    Faqs.push({
      id: doc.id,
      question: doc.data().ques,
      answer: doc.data().ans
    })
  })
};

async function fetchClubsData() {
  const snapshot = await getDocs(collection(db, 'contribute-page-societies'));
  snapshot.forEach((doc)=>{
    clubs.push({
      serialNo: doc.id,
      name: doc.data().csname,
      description: doc.data().input_suggestion,
      logo: doc.data().logo_link,
      website: doc.data().website_link
    })
  })
};

function App() {

  useEffect(()=>{
    fetchFaqData();
    fetchClubsData();
  })

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
