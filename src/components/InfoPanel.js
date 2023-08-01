import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class InfoPanel extends Component {
    render() {
        let title = this.props.title;
        let technique = this.props.technique;
        let date = this.props.date;
        let map = this.props.map
        let desc = this.props.desc
        return (
            <section id="infobox">
                <div style={{backgroundColor: "white", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "5%"}}>
                    <b style={{textAlign: "center"}}>{title}</b>
                    <hr/>
                    <b>Date</b>
                    <p style={{marginBottom:'2px'}}>{date}</p>
                    <b>Technique Used</b>
                    <p style={{marginBottom:'2px'}}>{technique}</p>
                    <hr/>
                    <b>History</b>
                    <p style={{textAlign: "justify"}}>{desc}</p>
                    <hr/>
                    <Iframe src={map} width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </div>
            </section>
        )
    }

}