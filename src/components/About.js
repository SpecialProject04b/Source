import "./App.css";
import { data } from "./constant/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
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
        <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
          <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(0,0,0,0.8)"}}>
            <div className="toolbars" style={{width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faPlus} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faMinus} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faX} onClick={this.click} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <img src={data[this.state.index].src} style={{height:"80vh", transform: "translate(40%, 10%)"}} alt=""></img>
          </div>
          <div><Header resumeData={resumeData}/></div>
          <div><h1 style={{color:"white", paddingLeft:"30px"}}>Collection Gallery</h1></div>
          <div className="flexbox gallery">
              {data.map((item, index) => (
                  <img src={item.src} style={{ objectFit: 'cover', height:200, width:200 }} alt="" onClick={() => this.click(index)}/>))}
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
