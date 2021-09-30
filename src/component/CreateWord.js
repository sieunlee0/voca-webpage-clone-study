import React from "react";
import useFetch from "../hooks/useFetch";
 
export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");

    return (
        <from>
            <div className="input_area">
                <label>eng</label>
                <input type="text" placeholder="computer" />
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터" />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
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