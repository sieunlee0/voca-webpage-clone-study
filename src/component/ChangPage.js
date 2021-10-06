import React from "react";
import useFetch from "../hooks/useFetch";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function ChangePage() {

    const days = useFetch("http://localhost:3001/days");

    function nextPage(){}

    return(
        <div className="chagePage">
            <button id="leftPage" onClick= { nextPage }> ◀ </button>
            <button id="rightPage" onClick= { nextPage }> ▶ </button>
        </div>
    );
}