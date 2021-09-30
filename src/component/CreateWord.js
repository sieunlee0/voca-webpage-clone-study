import React from "react";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useHistory } from "react-router";
// usefetch는 왜 useState나 useEffect같은 import방식이 아닐까?
 
export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();

        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);
        // value는 input에 입력된 값을 얻을 수 있고, current속성은 그 해당요소에 접근할 수 있다.

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
                // Link to처럼 a태그를 사용하지 않고 페이지를 이동시키고 싶을 때 사용할 수 있다
            }
        });
    }

    const engRef = useRef(null); //useRef는 돔에 점근할 수 있게 해준다.
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef} >
                    {days.map(day => (
                        <option key= {day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>save</button>
        </form>
    )
}