import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        let data = this.props.data;
        let func = this.props.func;
        return (
            <section id="portfolio">
                {data.map((item, index) => (
                    <div class="project">
                        <img class="project__image" src={item.src} style={{objectFit: "cover"}}/>
                        <p>{item.sub}</p>
                        <h3 class="grid__title">{item.title}</h3>
                        <div class="grid__overlay">
                        <button class="viewbutton" onClick={()=>func(index)}>view more</button>
                        </div>
                    </div>
                    ))}
            </section>
        )
    }

}