import React, { Component } from 'react';
import Header from './Header';
import animation from '../animationInverse.css'

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const bgText = {
      position: 'absolute',
      top: '15%',
      left: '5%',
      letterSpacing: '2px',
      display: 'inline-block',
      fontSize: '25px',
      transform: 'scaleY(2)',
      transformOrigin: '0px 0px',
      fontWeight:'bold',
      // marginBottom: '10%', // If needed, uncomment this line
      color: 'white',

    };
    const bgTextPara = {
      color: 'white',
      position: 'absolute',
      top: '25%',
      left: '5%',
      fontWeight:'bold',
      fontSize: '70px',
    }

    const bgTextParaContact = {
      color: 'white',
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      fontWeight:'bold',
      fontSize: '30px',
      textAlign: 'right',
      lineHeight:'0.5',

    }
    const bg = {
      backgroundColor: 'black',
      height:'1000px;'
    }

    return (

      <div id="contact" style={bg}>
        <Header resumeData={resumeData}/>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >

        <div style={bgText}>Feel free to contact us for any enquiries. </div>
        
        <div style={bgTextPara}>
          <p>Follow The Mitchell Library on</p>
          <p>
            <a href="https://www.facebook.com/themitchelllibrary/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FGlasgowLib" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=E2XGVyRk4BA&list=PLboTtfd6l4frfaLJtsQPB1XgwUaTWlRgJ&ab_channel=GlasgowLife" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </p>
        </div>

        <div style={bgTextParaContact}>
              
              <p>
                <i className="fas fa-phone"></i> 0141 287 2999
              </p>
              <p>
                <i className="fas fa-envelope"></i> libraries@glasgowlife.org.uk
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> North Street, Glasgow, G3 7DN
              </p>
              <p>
                <a href="https://www.google.co.uk/maps/place/The+Mitchell+Library/@55.865322,-4.27375870000003,16z">View on map</a>
              </p>
        </div>

        {/* <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact us for any enquiries. 
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Follow The Mitchell Library on:</h4>
              <p>
                <a href="https://www.facebook.com/themitchelllibrary/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </p>
              <p>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FGlasgowLib" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=E2XGVyRk4BA&list=PLboTtfd6l4frfaLJtsQPB1XgwUaTWlRgJ&ab_channel=GlasgowLife" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </p>
            </div>
            <div className="widget">
              <h4>Contact Info:</h4>
              <p>
                <i className="fas fa-phone"></i> 0141 287 2999
              </p>
              <p>
                <i className="fas fa-envelope"></i> libraries@glasgowlife.org.uk
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> North Street, Glasgow, G3 7DN
              </p>
              <p>
                <a href="https://www.google.co.uk/maps/place/The+Mitchell+Library/@55.865322,-4.27375870000003,16z">View on map</a>
              </p>
            </div>
          </aside>
        </div> */}
      
      </div>
      
    );
  }
}
