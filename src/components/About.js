import "./App.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { data } from "./constant/data";
import Header from './Header';
import Footer from './Footer';
import { Bars } from 'react-loader-spinner';
import React, { Component } from 'react';

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
    questions: null,
    displayQuestions: false,
    index: 0,
    isLoading: true,
  }

  componentDidMount() {
    const loadAllImages = data.map(item => loadImage(item.src));
    Promise.all(loadAllImages).then(() => {
      this.setState({ isLoading: false });
    });
  }

  click = (i) => {
    this.setState({
      displayQuestions: !this.state.displayQuestions,
      index: i
    });
  }

  render() {
    let resumeData = this.props.resumeData;

    if ( this.state.displayQuestions ) {
      return (
        <div style={{height:"100vh", backgroundColor:"black",}}>
          <img src={data[this.state.index].src} style={{height:"80vh", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} alt=""onClick={this.click}></img>
        </div>
      )
    }

    if(this.state.isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Bars type="Bars" color="#00BFFF" height={80} width={80} />
        </div> 
      )
    }

    return (
      <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
        <div><Header resumeData={resumeData}/></div>
        <div><h1 style={{color:"white", paddingLeft:"30px"}}>Collection Gallery</h1></div>
        <div className="flexbox gallery">
          {data.map((item, index) => (
            <img src={item.src} style={{ objectFit: 'cover', height:200, width:200 }} alt="" onClick={() => this.click(index)}/>))}
        </div>
        <div><Footer resumeData={resumeData}/></div>
      </div>
    );
  }
}
