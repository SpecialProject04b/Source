import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { TransformWrapper, TransformComponent, KeepScale  } from "react-zoom-pan-pinch";
import AnnotateView from './AnnotateView';
import { ReactComponent as Pin } from "react-zoom-pan-pinch/src/stories/assets/pin.svg";


export default class DetailedView extends Component {

    state = {
        displayAnnotate: false,
        viewComment: false
      }

    toggleImage = (i) => {
        this.setState({
          displayAnnotate: !this.state.displayAnnotate,
        });
      }

    toggleViewAnnotate = () => {
      this.setState({
        viewComment: !this.state.viewComment,
      });
    }

    //DATA TO PULL FROM BACKEND, REF with filename
    testAnnotate = [
      {
        top: "25%",
        left: "25%",
        text: "top left"
      },
      {
        top: "75%",
        left: "25%",
        text: "bottom left"
      },
      {
        top: "75%",
        left: "75%",
        text: "bottom right"
      },
      {
        top: "25%",
        left: "75%",
        text: "top right"
      }
    ]


    
    
    handleClick = (event) => {
        const image = event.currentTarget;
        const imageRect = image.getBoundingClientRect();
        const imageWidth = image.naturalWidth;
        const imageHeight = image.naturalHeight;
    
        const relativeX = event.clientX - imageRect.left;
        const relativeY = event.clientY - imageRect.top;
    
        const absoluteX = (relativeX / imageRect.width) * imageWidth;
        const absoluteY = (relativeY / imageRect.height) * imageHeight;

        console.log(`Absolute Mouse X: ${absoluteX}, Absolute Mouse Y: ${absoluteY}`);
        // You can perform any other actions with the mouse coordinates here
      };

    render() {
        let data = this.props.data;
        let func = this.props.func;
        let index = this.props.index

        var styles = {
            zIndex: 995,
            height: "100%",
            transform: 'scale(1)',
            margin: "auto",
          }
        
        return (
            <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0px", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(0,0,0,0.8)", overflow: "hidden"}}>
            {this.state.displayAnnotate && <AnnotateView data={data} func={this.toggleImage} index={index}/>}
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faX} onClick={this.toggleViewAnnotate} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faX} onClick={this.toggleImage} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
              <FontAwesomeIcon icon={faX} onClick={func} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{height: "calc(100% - 126px)", width: "100%", top: "46px", position: "relative"}}>
              <TransformWrapper maxScale={100}>
                <TransformComponent>
                  <div style={{position: "relative", height:"100%"}}>
                    <img src={data[index].src} style={styles} alt=""/>
                     {this.state.viewComment && this.testAnnotate.map((item, index) => (
                        <div class="point" style={{position: "absolute", transform: "translate(-50%, -50%)", top: item.top, left: item.left}}>
                          <KeepScale><Pin fill="red" style={{ width: "20px", height: "20px" }}></Pin></KeepScale>
                          <span class="tooltip">{item.text}</span>
                        </div>
                     ))}
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        )
    }

}