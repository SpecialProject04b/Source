import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { TransformWrapper, TransformComponent, resetTransform} from "react-zoom-pan-pinch";


export default class DetailedView extends Component {


    
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
            transform: 'scale(0.8)',
            display: "block",
            margin: "auto",
            position: "relative"
          }
        
        return (
            <div id="overlay" style={{zIndex:"999", position:"absolute", top:"0px", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(0,0,0,0.8)", overflow: "hidden"}}>
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faX} onClick={func} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{display: "flex", flexDirection: "row", height: "calc(100% - 126px)", width: "100%", top: "46px", position: "relative"}}>
              <TransformWrapper pinch={{step: "5000"}} onContextMenu={this.handleClick}>
                <TransformComponent onContextMenu={this.handleClick}>
                    <img src={data[index].src} style={styles} alt="" onContextMenu={this.handleClick}/>
                </TransformComponent>
              </TransformWrapper>
              <div id="info" style={{width: "30%", background:"azure", zIndex:"997"}}></div>
            </div>
          </div>
        )
    }

}