import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class DetailedView extends Component {


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
            <div id="overlay" style={{zIndex:"999", position:"absolute", top:"22px", left: "0", width: "100%", height:"100vh", backgroundColor:"rgba(0,0,0,0.8)", overflow: "hidden"}}>
            <div className="toolbars" style={{zIndex:"998", position: "absolute", width:"100%", backgroundColor:"black", height:"46px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
              <FontAwesomeIcon icon={faX} onClick={func} style={{width:"46px", fontSize:"x-large", marginTop:"auto", marginBottom:"auto"}}/>
            </div>  
            <div id="imagebox" style={{display: "flex", flexDirection: "row", height: "calc(100% - 126px)", width: "100%", top: "46px", position: "relative"}}>
              <TransformWrapper pinch={{step: "5000"}}>
                <TransformComponent>
                  <img src={data[index].src} style={styles} alt=""></img>
                </TransformComponent>
              </TransformWrapper>
              <div id="info" style={{width: "30%", background:"azure", zIndex:"997"}}></div>
            </div>
          </div>
        )
    }

}