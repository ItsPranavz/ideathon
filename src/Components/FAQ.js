import React from 'react';
import './FAQ.css';
import { Faqs } from './assets/faq-questions';
import { motion } from 'framer-motion';
import { 
  useState, useEffect 
} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 0
});

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <div className='pageContainer'>
      <div className="faqSubHeader">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        <h2 className='faqSubHeaderTitle'> Find answers to all your questions and queries about <br/> academics, protocols and our college in general. </h2>
      </div>
      <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td"><input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Senpai of the pool, what is your wisdom?" required/></div>
            <div class="td" id="s-cover">
              <button type="button">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
            </div>
          </form>
        </div>
        <div className="faqSectionDiv">
          {Faqs.filter((faq) => faq.question.toLowerCase().includes(query)).map((el) => (
            <motion.div data-aos="zoom-in-up" transition={{layout: {duration: 0.5, type: "spring"}}} layout id={el.id} onClick={() => setIsOpen(el.id)} className='faqSectionDivCard'>
              <motion.h1 layout="position" className='faqSectionDivCardTitle'> {el.question} </motion.h1>
              {isOpen==el.id && (
              <motion.p layout="position" className='faqSectionDicCardText'> {el.answer} </motion.p>
              )}
            </motion.div>
          ))}
        </div>
    </div>
  )
}