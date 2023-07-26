import "./App.css";
import { data } from "./constant/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import Footer from './Footer';
import { Bars } from 'react-loader-spinner';
import React, { Component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  scaleUp = () => {
    this.setState({scale: this.state.scale + 0.2}, () => {
      console.log(this.state.scale)
  });
  }

  scaleDown = () => {
    this.setState({scale: this.state.scale - 0.2}, () => {
      console.log(this.state.scale)
  });
  }



  render() {
    let resumeData = this.props.resumeData;
    var styles = {
      zIndex: 995,
      height: "100%",
      transform: 'scale('+this.state.scale+')',
      display: "block",
      margin: "auto",
      position: "relative"
    }

    if ( this.state.displayQuestions ) {
      return (
        <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
          <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(0,0,0,0.8)", overflow: "hidden"}}>
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faPlus} onClick={this.scaleUp} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faMinus} onClick={this.scaleDown} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faX} onClick={this.toggleImage} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{display: "flex", flexDirection: "row", height: "calc(100% - 46px)", width: "100%", top: "46px", position: "relative"}}>
              <TransformWrapper pinch={{step: "150"}}>
                <TransformComponent>
                  <img src={data[this.state.index].src} style={styles} scale={this.state.scale} alt=""></img>
                </TransformComponent>
              </TransformWrapper>
              <div id="info" style={{width: "30%", background:"azure", zIndex:"997"}}></div>
            </div>
          </div>
          <div><Header resumeData={resumeData}/></div>  
          <div><h1 style={{color:"black", paddingLeft:"30px"}}>Collection Gallery</h1></div>
          <div className="flexbox gallery">
              {data.map((item, index) => (
                  <img src={item.src} style={{ objectFit: 'cover', height:200, width:200 }} alt="" onClick={() => this.toggleImage(index)}/>))}
          </div>
          <div><Footer resumeData={resumeData}/></div>
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
        <div><h1 style={{color:"black", paddingLeft:"30px"}}>Collection Gallery</h1></div>
        <div className="flexbox gallery">
          {data.map((item, index) => (
            <img src={item.src} style={{ objectFit: 'cover', height:200, width:200 }} alt="" onClick={() => this.toggleImage(index)}/>))}
        </div>
        <div><Footer resumeData={resumeData}/></div>
      </div>
    );
  }
}
