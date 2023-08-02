import React, { Component } from 'react';
import axios from 'axios';  

export default class Gallery extends Component {
    state = {
        isChecking: true,
        data: []
    };

    checkLike(id){
        if(localStorage.getItem(id)){
            return JSON.parse(localStorage.getItem(id));
        }else{
            return false;
        }
        
    }

    setLike(id){
        axios.post("https://4b-alexander-thomson-backend.vercel.app/like", {photoId : id})
        .then(response => {
            localStorage.setItem(id, "true")
            this.getMountLikes();
        })
        .catch(error => {
          // Request failed, handle the error here.
          console.error('Error:', error);
        });
    }

    setUnLike(id){
        axios.post("https://4b-alexander-thomson-backend.vercel.app/unlike", {photoId : id})
        .then(response => {
          // Request was successful, handle the response data here.
          localStorage.setItem(id, "false")
          this.getMountLikes();
        })
        .catch(error => {
          // Request failed, handle the error here.
          console.error('Error:', error);
        });
    }

    getMountLikes(){
        var preLoadedData = this.props.data
        axios.get("https://4b-alexander-thomson-backend.vercel.app/allFeedback")
        .then(response => {
          // Request was successful, handle the response data here.
          console.log('Response:', response.data.data);
          preLoadedData.forEach((element,index) => {
            var targetPhotoId  = element.src
            var photoArray =  response.data.data
            var photoWithTargetId = photoArray.find(photo => photo.photoId === targetPhotoId);
            
            if (photoWithTargetId) {
                element['like'] = photoWithTargetId.like;
                // console.log(`Like count for photoId ${targetPhotoId}: ${photoWithTargetId.like}`);
            } else {
                element['like']  = 0;
                console.log(`Photo with photoId ${targetPhotoId} not found.`);
            }
            // element['iLike'] = this.checkLike(targetPhotoId);
           
          });
          console.log('donzo:', preLoadedData);
          this.setState({
            isChecking: false,
            data : preLoadedData
          });
        })
        .catch(error => {
          // Request failed, handle the error here.
          console.error('Error:', error);
        });
    }

    componentDidMount( ){
        this.getMountLikes();
    }

    render() {
        // let data = this.getAllLikes();
        let func = this.props.func;
        const { isChecking,data } = this.state;
        return (
            <div >
                {console.log(isChecking)}
                {isChecking ? (<div></div>) : (
                    <div id='portfolio'>
                        {data.map((item, index) => (
                        <div class="project">
                            <span style={{fontSize:"20px",position:'absolute',bottom:"8px", right:"8px", zIndex:1 , color:'#474545' , display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <span style={{margin: " 0 4px"}}>{item.like}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                <path fill="#474545" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                            </svg>
                            </span>
                            
                            <img class="project__image" src={item.src} style={{objectFit: "cover"}}/>
                            <p>{item.sub}</p>
                            <h3 class="grid__title">{item.title}</h3>
                            <div class="grid__overlay" style={{display:"flex", alignItems:"center", justifyContent:"center" , flexDirection:"column"}}>
                            {this.checkLike(item.src) ? 
                            (
                                <span style={{fontSize:"60px",cursor:"pointer", margin:"16px",fill:"#e34e45"}} onClick={()=>this.setUnLike(item.src)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                        <path  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                    </svg>
                                </span>
                            ) : (
                                <span style={{fontSize:"60px",cursor:"pointer", margin:"16px",fill:"#F0F0F0"}} onClick={()=>this.setLike(item.src)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                        <path  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                    </svg>
                                </span>
                            )}
                            
                            <button class="viewbutton" onClick={()=>func(index)}>view more</button>
                            </div>
                        </div>
                        ))}
                    </div>
                )}
            </div>
           
        )
    }

}