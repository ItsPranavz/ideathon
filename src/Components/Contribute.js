import React, { useState , useRef } from 'react';
import './Contribute.css';
import { Firestore } from '../firebase';
import { getFirestore,collection,onSnapshot,deleteDoc,addDoc,doc } from 'firebase/firestore';

export default function Contribute() {

  const [activeForm, setActiveForm] = useState('tnc');
  const db =getFirestore()
  const colref1=collection(db,'contribute-page-faq')
  const colref2=collection(db,'contribute-page-resources')
  const colref3=collection(db,'contribute-page-societies')
  const colref4=collection(db,'contribute-page-feedback')
  const addentry=document.getElementsByClassName('textbox')
  const [form1Values, setForm1Values] = useState({
    name1: '',
    sid1: '',
    email1: '',
    ques: '',
    ans: '',
  });
  const [form2Values, setForm2Values] = useState({
    name2: '',
    sid2: '',
    email2: '',
    rtitle: '',
    rtagb: '',
    rtags: '',
    rlink: '',
  });
  const [form3Values, setForm3Values] = useState({
    name3: '',
    sid3: '',
    email3: '',
    csname: '',
    isg: '',
    lgo: '',
    wbl: '',
  });
  const [form4Values, setForm4Values] = useState({
    name4: '',
    sid4: '',
    email4: '',
    fdbk: '',
  });
  /*const handleFormSubmit = () => {

    alert("Thanks for your contribution! Welcome to the Community!");
    // Handle form submission logic here
  }; */
  const handleForm1InputChange = (event) => {
    const { name, value } = event.target;
    setForm1Values((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleForm2InputChange = (event) => {
    const { name, value } = event.target;
    setForm2Values((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleForm3InputChange = (event) => {
    const { name, value } = event.target;
    setForm3Values((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleForm4InputChange = (event) => {
    const { name, value } = event.target;
    setForm4Values((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleForm1Submit = () => {
    // ... Handle form submission logic ...

    // Clear input fields
    setForm1Values({
      name1: '',
      sid1: '',
      email1: '',
      ques: '',
      ans: '',
    });
    addDoc(colref1,{
      name : addentry.name1.value,
      sid : addentry.sid1.value,
      email : addentry.email1.value,
      ques : addentry.ques.value,
      ans : addentry.ans.value,
      show_faq: false,
    })
    alert("Thank You for your contribution! Welcome to the Community! You will be notified once your input gets updated")
  };
  const handleForm2Submit = () => {
    // ... Handle form submission logic ...

    // Clear input fields
    setForm2Values({
      name2: '',
      sid2: '',
      email2: '',
      rtitle: '',
      rtagb: '',
      rtags: '',
      rlink: '',
    });
    addDoc(colref2,{
      name : addentry.name2.value,
      sid : addentry.sid2.value,
      email : addentry.email2.value,
      resource_title : addentry.rtitle.value,
      resource_branch : addentry.rtagb.value,
      resource_sem : addentry.rtags.value,
      resource_link: addentry.rlink.value,
      show_resource: false,
    })
    alert("Thank You for your contribution! Welcome to the Community! You will be notified once your input gets updated")
  };
  const handleForm3Submit = () => {
    // ... Handle form submission logic ...

    // Clear input fields
    setForm3Values({
      name3: '',
      sid3: '',
      email3: '',
      csname: '',
      isg: '',
      lgo: '',
      wbl: '',
    });
    addDoc(colref3,{
      name : addentry.name3.value,
      sid : addentry.sid3.value,
      email : addentry.email3.value,
      csname: addentry.csname.value,
      input_suggestion: addentry.isg.value,
      logo_link: addentry.lgo.value,
      website_link: addentry.wbl.value,
      show_club: false,
    })
    alert("Thank You for your contribution! Welcome to the Community! You will be notified once your input gets updated")
  };
  const handleForm4Submit = () => {
    // ... Handle form submission logic ...

    // Clear input fields
    setForm4Values({
      name4: '',
      sid4: '',
      email4: '',
      fdbk: '',
    });
    addDoc(colref4,{
      name : addentry.name4.value,
      sid : addentry.sid4.value,
      email : addentry.email4.value,
      feedback : addentry.fdbk.value,
      
    })
    alert("Thank You for your valuable feedback! We will get back to you soon!")
  };

  const handleFormClick = (formId) => {
    if (activeForm === formId) {
      setActiveForm('tnc');
    }
    else {
      setActiveForm(formId);
    }

  };
  let formcontent = null;
  if (activeForm === 'tnc') {
    formcontent = <div className="mainform" id='tnc'>
      <h2>Terms and Conditions</h2>
      <p id="pt1">
        <span className="colourp">-{'>'}</span> Uploading any material containing any sort of malicious, unsafe,
        or prohibited content is <span className="colourp">strictly prohibited.</span>
      </p>
      <p id="pt2">
        <span className="colourp">-{'>'}</span> Trying to interfere with the server or any of the components of the
        website through any means is <span className="colourp">not allowed. </span>
      </p>
      <p id="pt3">
        <span className="colourp">-{'>'}</span> With every contribution, the name and ID of the contributor shall
        also be displayed for transparency purposes.
      </p>
      <p id="pt4">
        <span className="colourp">-{'>'}</span> The website moderators have the right to remove/delete any sort of
        content from the website, in case of any <span className="colourp">complaint</span> or <span className="colourp">issue</span> regarding the same.
      </p>
      <h2 id="nu"><br/>Thank You!</h2>

    </div>
  }
  else if (activeForm === 'form1') {
    formcontent = <div className='mainform' id='form1'>
      <div className="form">
        <input type="text" placeholder=" " className="textbox" id="name1" name='name1' value={form1Values.name1} onChange={handleForm1InputChange} />
        <label className="form-label">Name</label>
      </div>
      <div className="form">
        <input type="text" placeholder=" " className="textbox" id="sid1" name='sid1' value={form1Values.sid1} onChange={handleForm1InputChange} />
        <label className="form-label">Student ID</label>
      </div>
      <div className="form">
        <input type="text" placeholder=" " className="textbox" id="email1" name='email1' value={form1Values.email1} onChange={handleForm1InputChange} />
        <label className="form-label">Email</label>
      </div>
      <div className="form">
        <input type="text" placeholder=" " className="textbox" id="ques" name='ques' value={form1Values.ques} onChange={handleForm1InputChange} />
        <label className="form-label">Enter the question</label>
      </div>
      <div className="form">
        <input type="text" placeholder=" " className="textbox" id="ans" name='ans' value={form1Values.ans} onChange={handleForm1InputChange} />
        <label className="form-label">Enter your answer</label>
      </div>
      <div className="form-button" id="btn1">
        <button onClick={handleForm1Submit}>SUBMIT</button>
      </div>

    </div>
  }
  else if (activeForm === 'form2') {
    formcontent = <div className='mainform' id='form2'>
      <div className="form">
        <input type="text" name='name2' placeholder=" " className="textbox" id="name2" value={form2Values.name2} onChange={handleForm2InputChange} />
        <label className="form-label">Name</label>
      </div>
      <div className="form">
        <input type="text" name='sid2' placeholder=" " className="textbox" id="sid2" value={form2Values.sid2} onChange={handleForm2InputChange} />
        <label className="form-label">Student ID</label>
      </div>
      <div className="form">
        <input type="text" name='email2' placeholder=" " className="textbox" id="email2" value={form2Values.email2} onChange={handleForm2InputChange} />
        <label className="form-label">Email</label>
      </div>
      <div className="form">
        <input type="text" name='rtitle' placeholder=" " className="textbox" id="rtitle" value={form2Values.rtitle} onChange={handleForm2InputChange} />
        <label className="form-label">Resource Title</label>
      </div>
      <div className="form">
        <input type="text" name='rtagb' placeholder=" " className="textbox" id="rtagb" value={form2Values.rtagb} onChange={handleForm2InputChange} />
        <label className="form-label">Resource Branch</label>
      </div>
      <div className="form">
        <input type="text" name='rtags' placeholder=" " className="textbox" id="rtags" value={form2Values.rtags} onChange={handleForm2InputChange} />
        <label className="form-label">Resource Semester</label>
      </div>
      <div className="form">
        <input type="text" name='rlink' placeholder=" " className="textbox" id="rlink" value={form2Values.rlink} onChange={handleForm2InputChange} />
        <label className="form-label">Resource Link</label>
      </div>

      <div className="form-button" id="btn2">
        <button onClick={handleForm2Submit}>SUBMIT</button>
      </div>

    </div>
  }
  else if (activeForm === 'form3') {
    formcontent = <div className='mainform' id='form3'>
      <div className="form">
        <input type="text" name='name3' placeholder=" " className="textbox" id="name3" value={form3Values.name3} onChange={handleForm3InputChange} />
        <label className="form-label">Name</label>
      </div>

      <div className="form">
        <input type="text" name='sid3' placeholder=" " className="textbox" id="sid3" value={form3Values.sid3} onChange={handleForm3InputChange} />
        <label className="form-label">Student ID</label>
      </div>

      <div className="form">
        <input type="text" name='email3' placeholder=" " className="textbox" id="email3" value={form3Values.email3} onChange={handleForm3InputChange} />
        <label className="form-label">Email</label>
      </div>

      <div className="form">
        <input type="text" name='csname' placeholder=" " className="textbox" id="csname" value={form3Values.csname} onChange={handleForm3InputChange} />
        <label className="form-label">Club Name</label>
      </div>

      <div className="form">
        <input type="text" name='isg' placeholder=" " className="textbox" id="isg" value={form3Values.isg} onChange={handleForm3InputChange} />
        <label className="form-label">Description</label>
      </div>

      <div className="form">
        <input type="text" name='lgo' placeholder=" " className="textbox" id="lgo" value={form3Values.lgo} onChange={handleForm3InputChange} />
        <label className="form-label">Logo Link</label>
      </div>

      <div className="form">
        <input type="text" name='wbl' placeholder=" " className="textbox" id="wbl" value={form3Values.wbl} onChange={handleForm3InputChange} />
        <label className="form-label">Website Link</label>
      </div>

      <div className="form-button" id="btn3">
        <button onClick={handleForm3Submit}>SUBMIT</button>
      </div>

    </div>
  }
  else if (activeForm === 'form4') {
    formcontent = <div className='mainform' id='form4'>
      <div className="form">
        <input type="text" name='name4' placeholder=" " className="textbox" id="name4" value={form4Values.name4} onChange={handleForm4InputChange} />
        <label className="form-label">Name</label>
      </div>
      <div className="form">
        <input type="text" name='sid4' placeholder=" " className="textbox" id="sid4" value={form4Values.sid4} onChange={handleForm4InputChange} />
        <label className="form-label">Student ID</label>
      </div>

      <div className="form">
        <input type="text" name='email4' placeholder=" " className="textbox" id="email4" value={form4Values.email4} onChange={handleForm4InputChange} />
        <label className="form-label">Email</label>
      </div>

      <div className="form">
        <input type="text" name='fdbk' placeholder=" " className="textbox" id="fdbk" value={form4Values.fdbk} onChange={handleForm4InputChange} />
        <label className="form-label">Feedback</label>
      </div>

      <div className="form-button" id="btn4">
        <button onClick={handleForm4Submit} >SUBMIT</button>
      </div>
    </div>
  }

  return (
    <div className='pageContainer'>
      <div className="contributeSubHeader">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
        <h2 className='contributeSubHeaderTitle'> Help build the ultimate one stop resource repository, <br/> for all college students, one contribution at a time. </h2>
      </div>
      <div className="contributeContainer">
        <div className="contributeBox" id="contributeBox1">
          <nav id="contributeNavbar">
            <ul>
              <li className="choice">
                <button onClick={() => handleFormClick('form1')} id="choice1">
                  FAQ's
                </button>
              </li>
              <li className="choice">
                <button onClick={() => handleFormClick('form2')} id="choice2">
                  Resources
                </button>
              </li>
              <li className="choice">
                <button onClick={() => handleFormClick('form3')} id="choice3">
                  Societies
                </button>
              </li>
              <li className="choice">
                <button onClick={() => handleFormClick('form4')} id="choice4">
                  Feedback
                </button>
              </li>
            </ul>
          </nav>
          {formcontent}
        </div>

        <div className="contributeBox" id="contributeBox2">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
          <section id="contributeText">
            <p id="contributeLine1">Contribute and</p>
            <p id="contributeLine2">become a part of</p>
            <p id="contributeLine3">the amazing</p>
            <p id="contributeLine4">Community!</p>
          </section>
        </div>
      </div>
    </div>
  );
}

