import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        let data = this.props.data;
        let func = this.props.func;
        return (
            <div class="container">
                {data.map((item, index) => (
                    <div class="card card2">
                    <h2>{item.sub}</h2>
                    <i class="fas fa-arrow-right"></i>
                    <p>{item.title}</p>
                    <div class="pic" style={{backgroundImage: `url(${item.src})`}}></div>
                    <button onClick={()=> func(index)}>
                    </button>
                    </div>))}
            </div>
        )
    }

}