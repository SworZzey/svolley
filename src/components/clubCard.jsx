import React from "react";
import vk from "../img/vk-social-network-logo.png"
import tg from "../img/telegram (1).png"
import yt from "../img/youtube.png"
function Card(props) {
    return (
        <div className="card">
            <div className="imgLogo"><img src={props.img} style={{width: 120}} alt="logoTeam" /></div>
            <div className="info">
                <div className="name"><h2>{props.name}</h2></div>
                <div className="social">
                    <a href={props.vk}><img src={vk} alt="" /></a>
                    <a href={props.tg}><img src={tg} alt="" /></a>
                    <a href={props.yt}><img src={yt} alt="" /></a>
                </div>
                <div className="webSite"><a href={props.linkSite}>{props.site}</a></div>
            </div>
        </div>
    )
}

export default Card;