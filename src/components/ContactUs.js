import React, { Component } from 'react';
import Header from './Header';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <Header resumeData={resumeData}/>
        <div className="row section-head">
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
        </div>
      </section>
    );
  }
}
