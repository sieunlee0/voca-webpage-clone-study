import React from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function ChangePage() {
    const { day } = useParams();
    const history = useHistory();
    const days = useFetch("http://localhost:3001/days");

    function nextPage(){
        const plusDay = Number(day)+1;
        const nextDay = JSON.stringify(plusDay);
        history.push(`/day/${nextDay}`);

        if(day > days.length-1 ){
            history.push("/error");
        }
    }

    function previousPage(){
        const minusDay = Number(day)-1;
        const preDay = JSON.stringify(minusDay);
        history.push(`/day/${preDay}`);

        if(minusDay < 1)
            history.push("/error")
    }
    

    return(
        <div className="chagePage">
            <button id="leftPage" onClick={previousPage}> ◀ </button>
            <button id="rightPage" onClick={nextPage}> ▶ </button>
        </div>
    );
}