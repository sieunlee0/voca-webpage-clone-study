import React from "react";
import dummy from "../db/data.json"
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";


export default function ChangePage() {
    const days = useFetch("http://localhost:3001/days");
    const day = days.day;
    const history = useHistory();
    
    return(
        <div className="chagePage">
            <Link id="leftPage"> ◀ </Link>
            <Link id="rightPage"> ▶ </Link>
        </div>
    );
}