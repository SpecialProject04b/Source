import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';  

const NewsLetter = ({ resumeData }) => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/scrape') 
      .then(response => {
        setScrapedData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
      <Header resumeData={resumeData}/>
      <div className="row">
        <div className="twelve columns collapsed">
        <h1 style={{marginTop: '50px', color: '#61dafb', textAlign: 'center'}}>
          News Directly from{' '}
          <a href="https://www.alexanderthomsonsociety.org.uk/?cat=54" target="_blank" rel="noopener noreferrer">
            Alexander Thomson Society
          </a>
        </h1>
          <div id="portfolio-wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {
            scrapedData.map((item, index) => {
              return (
                <div key={index} style={{width: '30%', margin: '1%', border: '1px solid #ddd', borderRadius: '5px', padding: '10px'}}>
                  <a href={item.link}>
                    <img 
                      src={item.imageUrl ? item.imageUrl : '/unavailable.jpeg'} 
                      alt={item.title} 
                      style={{width: '100%', height: '200px', objectFit: 'cover'}}
                    />
                    <h5 style = {{color: '#61dafb'}}> {item.title} </h5>
                    <p>{item.summary}</p>
                  </a>
                </div>

              )
            })
          }
          </div>
        </div>
      </div>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default NewsLetter;
