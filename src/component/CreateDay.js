import React from "react";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";


export default function CreateDay() {

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function addDay(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/days/`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                day : days.length + 1
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("It generated!^_^")
                history.push("/")
            }
        });
    }

    return(
        <div>
            <h3>Number of Day : {days.length}days</h3>
            <button onClick={addDay}>Add New Day</button>
        </div>
    );
}