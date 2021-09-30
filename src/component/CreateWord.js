import React from "react";
import useFetch from "../hooks/useFetch";
 
export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");

    function onSubmit(e) {
        e.preventDefault();
    }

    const engRef = useRef(null); //useRef는 돔에 점근할 수 있게 해준다.
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <from onSubmit={onSubmit}>
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
        </from>
    )
}