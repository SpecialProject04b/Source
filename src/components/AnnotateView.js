import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react';
import "./bubble.css";
import { ReactComponent as Pin } from "react-zoom-pan-pinch/src/stories/assets/pin.svg";
import axios from 'axios';  

export default class AnnotateView extends Component {
    state = {
        x: "50%",
        y: "50%",
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
    
    handleInputClick = (event) => {
      event.stopPropagation()
      console.log("box")
    }

    handleSubmit = (event, id) => {
      event.stopPropagation()

      if(this.state.text === ""){
        alert("Please input comments")
      } else {
        const apiUrl = 'http://localhost:3001/comment'; // Replace with your actual API URL.
        const params = {
          photoId: id,
          comment: {
            top: this.state.y,
            left: this.state.x,
            text: this.state.text
          }
          };

        console.log(params)

        // Make the POST request using Axios.
        axios.post(apiUrl, params)
        .then(response => {
          // Request was successful, handle the response data here.
          console.log('Response:', response.data);
          alert("Comment Successfully Added")
        })
        .catch(error => {
          // Request failed, handle the error here.
          console.error('Error:', error);
          alert("Unsuccessful Request")
        });

      }
    }

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
            
            <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0px", left: "0", width: "70%", height:"100vh", backgroundColor:"rgba(0,0,0,0.9)", overflow: "hidden"}}>
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faX} onClick={func} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{display: "flex", flexDirection: "row", height: "calc(100% - 46px)", width: "100%", top: "46px", position: "relative"}}>
                <div style={{position: "relative"}}>
                    <img src={data[index].src} style={styles} alt=""></img>
                    <div style={{zIndex: 995, height: "100%", transform: "scale(0.8)", display: "block", position: "relative", top: "-100%"}}  onClick={this.handleClick}>
                        <div class="pointerPos" onClick={this.handleInputClick}style={{position: "absolute", top: this.state.y, left: this.state.x, transformOrigin: "left"}}>
                          <Pin style={{fill:"blue", width: "20px", height: "20px", transform: "translate(-50%, -50%)"}}>{this.state.text}</Pin>
                          <div style={{minWidth:"3000px", top: "-22px",  left: "105%", float:"left",  position: "absolute"}}>
                            <span>
                              <input style={{float:"left", height: "50px", borderRadius: "5px 0px 0px 5px"}}type="text" value={this.inputValue} onChange={this.handleInputChange} placeholder='Click anywhere...'/>
                              <button style={{float:"left", height: "50px", borderRadius: "0px 5px 5px 0px"}} onClick={(e)=>this.handleSubmit(e, data[index].src)}>Submit</button>
                            </span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }

}