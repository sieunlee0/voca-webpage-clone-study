import React from "react";
// import dummy from "../db/data.json"
// import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";
// import { useState } from "react";


export default function ChangePage() {
    const { day } = useParams();
    // const [ curDay, setCurDay ] = useState(day);
    const history = useHistory();

    function nextPage(){
        // setCurDay(()=>
        //     Number(curDay)+1
        // );
        // const changeDay = setDay(day+1);
        // const newDay = JSON.stringify(curDay);
        const plusDay = Number(day)+1;
        const nextDay = JSON.stringify(plusDay);
        history.push(`/day/${nextDay}`);
        console.log(nextDay);
    }

    function previousPage(){
        const minusDay = Number(day)-1;
        const preDay = JSON.stringify(minusDay);
        history.push(`/day/${preDay}`);
        console.log(preDay);
    }
    

    
    return(
        <div className="chagePage">
            <button id="leftPage" onClick={previousPage}> ◀ </button>
            <button id="rightPage" onClick={nextPage}> ▶ </button>
        </div>
    );
}