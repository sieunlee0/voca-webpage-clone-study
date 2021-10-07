import React from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";


export default function ChangePage() {
    const { day } = useParams();
    const history = useHistory();

    function nextPage(){
        const plusDay = Number(day)+1;
        const nextDay = JSON.stringify(plusDay);
        history.push(`/day/${nextDay}`);
    }

    function previousPage(){
        const minusDay = Number(day)-1;
        const preDay = JSON.stringify(minusDay);
        history.push(`/day/${preDay}`);
    }
    

    
    return(
        <div className="chagePage">
            <button id="leftPage" onClick={previousPage}> ◀ </button>
            <button id="rightPage" onClick={nextPage}> ▶ </button>
        </div>
    );
}