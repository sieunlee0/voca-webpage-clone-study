import React from "react";
// import {Link} from "react-router-dom";
// import useFetch from "../hooks/useFetch";

export default function ChangePage() {
    function nextPage(){}


    return(
        <div>
            <h2 className="changePage" onClick= { nextPage }> ◀ </h2>
            <h2 className="changePage" onClick= { nextPage }> ▶ </h2>
        </div>
    );
}