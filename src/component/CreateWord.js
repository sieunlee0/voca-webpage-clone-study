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
                /* 기본주소에 추가로 주소를 넣어주는 것이다. 
                Daylist.js에서 Link to={`/day/${day.day}`로 day.day에 따라 페이지를 이동할 수 있게 하였다.
                .../day/1이라면 Day1의 페이지로 이동하여 단어를 보여주게 된다.
                (#위의 코드를 보면 history를 이용해 기본 주소를 가져오는 듯하다.)
                
                주소를 push로 추가해주고 있는데, /day/${dayRef.current.value}여기서 dayRef.current.value에 집중하자.
                current로 imput의 입력된 value을 알 수 있게 된다. (#그리고 dayRef를 통해 DOM을 접근하여 그 value값을 읽어 올수 있는 것 같다)
                따라서 Day를 1로 선택해서 save를 누르면 /day/1이 되고, 
                /day/${day.day}와 /day/${dayRef.current.value}는 같은 역할을 하는 것을 볼 수 있다*/
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