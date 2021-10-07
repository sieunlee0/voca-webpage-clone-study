import React from "react";
// import dummy from "../db/data.json"
// import {Link} from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import { useHistory } from "react-router";
import { useState } from "react";


export default function ChangePage({ days: d }) {
    const [ days, setDays ] = useState(d);
    
    function setDays() {
        fetch(`http://localhost:3001/days/${days.day}`,{
            method: 'PUT'
        });

    }
    
    return(
        <div className="chagePage">
            <button id="leftPage"> ◀ </button>
            <button id="rightPage" onClick={setDays}> ▶ </button>
        </div>
    );
}