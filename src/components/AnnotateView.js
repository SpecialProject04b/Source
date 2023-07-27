import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react';


export default class AnnotateView extends Component {
    state = {
        x: "",
        y: "",
        text: "",
      }

    submit = () => {
        //POST REQUEST localhost:3001/comment
    }


    handleClick = (event) => {
        const image = event.currentTarget;
        const imageRect = image.getBoundingClientRect();
        const imageWidth = image.naturalWidth;
        const imageHeight = image.naturalHeight;
    
        const relativeX = event.clientX - imageRect.left;
        const relativeY = event.clientY - imageRect.top;
    
        const absoluteX = (relativeX / imageRect.width) * imageWidth;
        const absoluteY = (relativeY / imageRect.height) * imageHeight;

        const sx = ((relativeX / imageRect.width)*100).toString() + "%"
        const sy = ((relativeY / imageRect.height)*100).toString() + "%"
        this.setState({x: sx, y: sy})

        console.log(this.state)
        console.log(this.state.text)
        console.log(sx, sy)
        console.log(`Absolute Mouse X: ${absoluteX}, Absolute Mouse Y: ${absoluteY}`);
        // You can perform any other actions with the mouse coordinates here
      };
    
    handleInputChange = (event) => {
        console.log(event.target.value)
          this.setState({text: event.target.value})
        console.log(this.state.text)
        };
    


    render() {
        let data = this.props.data;
        let func = this.props.func;
        let index = this.props.index



        var styles = {
            zIndex: 995,
            height: "100%",
            transform: 'scale(0.8)',
            display: "block",
            margin: "auto",
            position: "relative"
          }
        
        return (
            
            <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0px", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(255,0,0,1)", overflow: "hidden"}}>
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faX} onClick={func} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{display: "flex", flexDirection: "row", height: "calc(100% - 126px)", width: "100%", top: "46px", position: "relative"}}>
                <div style={{position: "relative"}}>
                    <img src={data[index].src} style={styles} alt=""></img>
                    <div style={{zIndex: 995, height: "100%", transform: "scale(0.8)", display: "block", position: "relative", top: "-100%"}}  onClick={this.handleClick}>
                        <div style={{color: "red", transform: "translate(0%, -50%)", position: "relative", marginLeft: this.state.x, top: this.state.y}}>===={this.state.text} </div>
                    </div>
                    
                </div>
              <div id="info" style={{width: "30%", background:"azure", zIndex:"997"}}>
                <div>{this.state.x}</div>
                <div>{this.state.y}</div>
                <div>{this.state.text}</div>
                
                <input
                    type="text"
                    value={this.inputValue}
                    onChange={this.handleInputChange}
                    placeholder="Type something..."
                />
                <button onClick={this.submit}>Submit</button>
              </div>
            </div>
          </div>
        )
    }

}