import React from "react";
import {Link} from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import { useParams } from 'react-router-dom';


export default function ChangePage() {
    return(
        <div className="chagePage">
            <Link to="" id="leftPage"> ◀ </Link>
            <Link to-="" id="rightPage"> ▶ </Link>
        </div>
    );
}