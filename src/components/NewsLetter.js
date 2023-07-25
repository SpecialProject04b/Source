import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';  // You will need to install axios using npm install axios

const NewsLetter = ({ resumeData }) => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/scrape') 
      .then(response => {
        setScrapedData(response.data);
        console.log(scrapedData); // Check the data
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(scrapedData);
  }, [scrapedData]);


  return (
    <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
      <Header resumeData={resumeData}/>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            scrapedData.map((item, index)=>{
              return(
                <div className="columns portfolio-item" key={index}>
                  <div className="item-wrap">
                    <a href={item.link}>
                      <img src={item.imageUrl} alt={item.title} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.title}</h5>
                          <p>{item.summary}</p>
                        </div>
                      </div>
                    </a>
                  </div>
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
