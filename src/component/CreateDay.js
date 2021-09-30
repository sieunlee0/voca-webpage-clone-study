import React from "react";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useHistory } from "react-router";

export default function CreateDay() {

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/words/`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("It generated!^_^")
                history.push(`/day/${dayRef.current.value}`)
            }
        });
    }

    return(
        <div></div>
    )
}