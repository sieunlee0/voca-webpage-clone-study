import React from "react";
// import dummy from "../db/data.json"
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";


export default function ChangePage() {
    // const {day} = useParams();
    // const day = days.day;
    const history = useHistory();
    const daysData = useFetch(`http://localhost:3001/days`);
    const day = daysData.day;

    function dayPlus() {
        const dayPlus = { day } + 1
        history.push(`/day/${dayPlus}`);    
    }
    
    return(
        <div className="chagePage">
            <button id="leftPage"> ◀ </button>
            <button id="rightPage"> ▶ </button>
        </div>
    );
}