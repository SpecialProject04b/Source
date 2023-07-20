import React, { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const backgroundStyles = {
      zIndex: 1,
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
    };

    const foregroundTextStyles = {
        zIndex: 2,
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
      };

    return (
      <React.Fragment>
          <Header resumeData={resumeData}/>
          <div className="row banner" style={foregroundTextStyles}>
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>{resumeData.roleDescription}</h3>
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
          <div id="3dBackground" style={backgroundStyles}>
            <iframe src="https://app.vectary.com/p/0QIOv3TQQwt0Zd3xry96Z4" frameBorder="0" width="100%" height="650"></iframe>
          </div>

      </React.Fragment>
    );
  }
}