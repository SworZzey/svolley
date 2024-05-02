import React from "react";
import matches from "../volley_data.json";

function Nearby() {
    // Получаем информацию о матче с номером 1 
    const matchInfo1 = matches["1"];
    const teamNameA = matches["1"]
    const teamNameB = matches["1"]
    const stream1 = matches["stream"]


    // Получаем информацию о матче с номером 2
    const matchInfo2 = matches["2"];
    const teamNameA2 = matches["3"]
    const teamNameB2 = matches["3"]
    const stream2 = matches["stream"]


    // Получаем информацию о матче с номером 3
    const matchInfo3 = matches["3"];
    const teamNameA3 = matches["5"]
    const teamNameB3 = matches["5"]
    const stream3 = matches["stream"]

    return (
        <div className="mainGames">
            <div className="containerGames">
                <div className="match1">
                    <div className="timeMatch"><p>{matchInfo1.date}</p></div>
                    <div className="teams">
                        <div className="teama1">
                            <div className="nameLogoA1"><p>{teamNameA.nameA}</p></div>
                        </div>
                        <div className="stream">
                            <div className="butStream"><p><a href={stream1.first}>Смотреть</a></p></div>
                        </div>
                        <div className="teamb1">
                            <div className="nameLogoA1"><p>{teamNameB.nameB}</p></div>
                        </div>
                    </div>
                </div>


                <div className="match2">
                    <div className="timeMatch"><p>{matchInfo2.date}</p></div>
                    <div className="teams">
                        <div className="teama1">
                            <div className="nameLogoA1"><p>{teamNameA2.nameA}</p></div>
                        </div>
                        <div className="stream">
                            <div className="butStream"><p><a href={stream1.secont}>Смотреть</a></p></div>
                        </div>
                        <div className="teamb1">
                            <div className="nameLogoA1"><p>{teamNameB2.nameB}</p></div>
                        </div>
                    </div>
                </div>


                <div className="match2">
                    <div className="timeMatch"><p>{matchInfo3.date}</p></div>
                    <div className="teams">
                        <div className="teama1">
                            <div className="nameLogoA1"><p>{teamNameA3.nameA}</p></div>
                        </div>
                        <div className="stream">
                            <div className="butStream"><p><a href={stream1.thri}>Смотреть</a></p></div>
                        </div>
                        <div className="teamb1">
                            <div className="nameLogoA1"><p>{teamNameB3.nameB}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nearby;
