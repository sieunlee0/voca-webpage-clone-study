import React from "react";
import useFetch from "../hooks/useFetch";

export default function ChangePage() {

    function nextPage(){}

    return(
        <div className="chagePage">
                <button id="leftPage" onClick= { nextPage }> ◀ </button>
                <button id="rightPage" onClick= { nextPage }> ▶ </button>
        </div>
    );
}