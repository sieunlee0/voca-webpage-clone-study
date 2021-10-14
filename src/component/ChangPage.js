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
    // if문이 함수 밖에 있어도 똑같이 작동할까?
    // if문을 함수 안에 작성하는 것과 바깥에 작성하는 것은 무슨 차이일까?
    
    return(
        <div className="chagePage">
            <button id="leftPage" onClick={previousPage}> ◀ </button>
            <button id="rightPage" onClick={nextPage}> ▶ </button>
        </div>
    );
}