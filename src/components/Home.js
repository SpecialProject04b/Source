import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const backgroundStyles = {
      zIndex: -1,
      position: 'absolute',
      top: '70%',
      left: '50%',
      transform: 'translate(-50%, -70%)',
      width: '100%'
    };

    const homepageText = {
      display:"flex", 
      flexDirection:"column", 
      justifyContent:"space-between", 
      height:"100vh", 
      overflowY:"hidden"
    };

    const bannerTextH1 = {
      fontSize: '72px',
      textAlign: 'center',
      marginTop: '10%'
    };

    return (
      <React.Fragment>
          <div id="3dBackground" style={backgroundStyles}>
            <iframe src="https://app.vectary.com/p/0QIOv3TQQwt0Zd3xry96Z4" frameBorder="0" width="100%" height="650"></iframe>
          </div>

          <div id="page" style={homepageText}>

              <div><Header resumeData={resumeData}/></div>
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline" style={bannerTextH1}>{resumeData.name}</h1>
                  <h3 style={{  fontFamily: 'sans-serif ' ,textAlign: 'center',marginTop: '30%'}}>{resumeData.roleDescription}</h3>
                  <hr />
                  <ul className="social">
                    {
                      resumeData.socialLinks && resumeData.socialLinks.map(item => {
                        return (
                          <li key={item.name}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
              </p>

              <div><Footer resumeData={resumeData}/></div>

          </div>

      </React.Fragment>
    );
  }
}