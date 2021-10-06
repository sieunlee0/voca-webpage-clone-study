import React from "react";
import useFetch from "../hooks/useFetch";
import {Link} from "react-router-dom";


export default function ChangePage() {

    const days = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
        <div className="chagePage">
            <Link to="" id="leftPage"> ◀ </Link>
            <Link to-="" id="rightPage"> ▶ </Link>
        </div>
    );
}