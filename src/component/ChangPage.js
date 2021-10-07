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

    function change(){
        // setCurDay(()=>
        //     Number(curDay)+1
        // );
        // const changeDay = setDay(day+1);
        // const newDay = JSON.stringify(curDay);
        const plusDay = Number(day)+1;
        const newDay = JSON.stringify(plusDay);
        history.push(`/day/${newDay}`);
        console.log(newDay);
    }
    

    
    return(
        <div className="chagePage">
            <button id="leftPage"> ◀ </button>
            <button id="rightPage" onClick={change}> ▶ </button>
        </div>
    );
}