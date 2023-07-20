import "./App.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { data } from "./constant/data";

import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <h1>Collection Gallery</h1>
        <p></p>
        <div className="flexbox gallery">
            <PhotoProvider  speed={() => 800} 
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
      </section>
    );
  }
}