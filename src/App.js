import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import 'react-photo-view/dist/react-photo-view.css';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header resumeData={resumeData}/> */}
        <Routes>
          <Route path="/" element={<Home resumeData={resumeData}/>} />
          <Route path="/about" element={<About resumeData={resumeData}/>} />
          <Route path="/resume" element={<Resume resumeData={resumeData}/>} />
          <Route path="/portfolio" element={<Portfolio resumeData={resumeData}/>} />
          <Route path="/testimonials" element={<Testimonials resumeData={resumeData}/>} />
          <Route path="/contact" element={<ContactUs resumeData={resumeData}/>} />
        </Routes>
        <Footer resumeData={resumeData}/>
      </Router>
    );
  }
}

export default App;
