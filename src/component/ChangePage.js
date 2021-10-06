import React from "react";
// import {Link} from "react-router-dom";
// import useFetch from "../hooks/useFetch";

export default function ChangePage() {
    function nextPage(){}


    return(
        <div>
            <button className="leftPage" onClick= { nextPage }> ◀ </button>
            <button className="rightPage" onClick= { nextPage }> ▶ </button>
        </div>
    );
}