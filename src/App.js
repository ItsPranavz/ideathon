import logo from './logo.svg';
import { Faqs } from './Components/assets/faq-questions';
import { clubs } from './Components/assets/clubs-societies-info';
import { resources } from './Components/assets/resources';
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
import { 
  collection, 
  getDocs, 
  getFirestore,
  query,
  where
} from 'firebase/firestore'

const db = getFirestore();

async function fetchFaqData() {
  const q = query(collection(db, 'contribute-page-faq'), where("show_faq", "==", true));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc)=>{
    Faqs.push({
      id: doc.id,
      question: doc.data().ques,
      answer: doc.data().ans
    })
  })
};

async function fetchClubsData() {
  const q = query(collection(db, 'contribute-page-societies'), where("show_club", "==", true));
  const snapshot = await getDocs(q);
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

async function fetchResourcesData() {
  const q = query(collection(db, 'contribute-page-resources'), where("show_resource", "==", true));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc)=>{
    resources.push({
      title: doc.data().resource_title,
      Branch: doc.data().resource_branch,
      Sem: doc.data().resource_sem,
      link: doc.data().resource_link
    })
  })
};

function App() {

  useEffect(()=>{
    fetchFaqData();
    fetchClubsData();
    fetchResourcesData();
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
