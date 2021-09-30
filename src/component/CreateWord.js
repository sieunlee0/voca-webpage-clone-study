import React from "react";
 
export default function CreateWord() {
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
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <button>save</button>
        </from>
    )
}