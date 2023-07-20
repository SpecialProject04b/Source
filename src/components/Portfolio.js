import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
      <div><Header resumeData={resumeData}/></div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
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
      <div><Footer resumeData={resumeData}/></div>
  </div>
        );
  }
}