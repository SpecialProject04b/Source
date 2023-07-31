import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';  
import { Bars } from 'react-loader-spinner';

const NewsLetter = ({ resumeData }) => {
  const [scrapedData, setScrapedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page) => {
    setIsLoading(true);
    axios.get(`http://localhost:3001/scrape/${page}`) 
      .then(response => {
        setScrapedData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div id="resume" style={{overflow:"auto",display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
      <Header resumeData={resumeData}/>
      <div className="row">
        <div className="twelve columns collapsed">
        <h3 style={{textAlign:"center"}}>
          News Direct from{' '}
          <a href="https://www.alexanderthomsonsociety.org.uk/?cat=54" target="_blank" rel="noopener noreferrer">
            Alexander Thomson Society
          </a>
        </h3>
          {isLoading ? 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <Bars type="Bars" color="#00BFFF" height={80} width={80} />
            </div> 
          :
            <div id="portfolio-wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
              {scrapedData.map((item, index) => {
                return (
                  <div key={index} style={{width: '30%', margin: '1%', border: '1px solid #ddd', borderRadius: '5px', padding: '10px'}}>
                    <a href={item.link}>
                      <img 
                        src={item.imageUrl ? item.imageUrl : '/unavailable.jpeg'} 
                        alt={item.title} 
                        style={{width: '100%', height: '200px', objectFit: 'cover'}}
                      />
                      <h1 style = {{color: '#61dafb'}}> {item.title} </h1>
                      <p>{item.summary}</p>
                    </a>
                  </div>
                )
              })}
            </div>
          }
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <button onClick={prevPage} disabled={currentPage === 1} style={{float:'left',marginLeft:'20px'}}>
              Previous Page
            </button>
            <button onClick={nextPage} style={{float:'right',marginRight:'20px'}}>
              Next Page
            </button>
          </div>
        </div>
      </div>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default NewsLetter;
