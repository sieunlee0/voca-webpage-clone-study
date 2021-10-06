import React from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useParams } from 'react-router-dom';


export default function ChangePage() {
    const { day } = useParams();

    const days = useFetch(`http://localhost:3001/words?day=${day}`);

    function changePlus() {

    }

    function dayPlus() {
        const plusDay = day + 1
    }

    return(
        <div className="chagePage">
            <Link to={  } id="leftPage"> ◀ </Link>
            <Link to-="" id="rightPage"> ▶ </Link>
        </div>
    );
}