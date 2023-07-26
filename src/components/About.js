import "./App.css";
import "./card.scss"
import { data } from "./constant/data";
import Header from './Header';
import Footer from './Footer';
import Gallery from "./Gallery";
import { Bars } from 'react-loader-spinner';
import React, { Component } from 'react';
import DetailedView from "./DetailedView";

const loadImage = src => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

export default class About extends Component {
  state = {
    displayQuestions: false,
    index: 0,
    isLoading: true,
    scale: 0.8
  }

  componentDidMount() {
    const loadAllImages = data.map(item => loadImage(item.src));
    Promise.all(loadAllImages).then(() => {
      this.setState({ isLoading: false });
    });
  }

  toggleImage = (i) => {
    this.setState({
      displayQuestions: !this.state.displayQuestions,
      index: i,
    });
  }

  render() {
    let resumeData = this.props.resumeData;
    if(this.state.isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Bars type="Bars" color="#00BFFF" height={80} width={80} />
        </div> 
      )
    }

    return (
      <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
        {this.state.displayQuestions && <DetailedView data={data} func={this.toggleImage} index={this.state.index}/>}
        <Header resumeData={resumeData}/>
        <div className="flexbox gallery">
          <Gallery data={data} func={this.toggleImage}/>
        </div>
        <div><Footer resumeData={resumeData}/></div>
      </div>
    );
  }
}
