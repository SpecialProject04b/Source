import "./App.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { data } from "./constant/data";
import Header from './Header';
import Footer from './Footer';

import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="page" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
        <div><Header resumeData={resumeData}/></div>
        <div><h1 style={{color:"white", paddingLeft:"30px"}}>Collection Gallery</h1></div>
        <div className="flexbox gallery">
            <PhotoProvider  speed={() => 300} 
                            easing={(type) => (type === 2 ? 'cubic-bezier(.17,.67,.83,.67)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            toolbarRender={({ onScale, scale }) => {
                              return (
                                <>
                                  <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
                                  <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
                                </>
                              );
                            }}>
            {data.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <img src={item.src} style={{ objectFit: 'cover', height:200, width:200 }} alt="" />
              </PhotoView>
            ))} 
            </PhotoProvider>
        </div>
        <div><Footer resumeData={resumeData}/></div>
      </div>
    );
  }
}