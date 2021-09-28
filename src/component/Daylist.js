import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

// import dummy from "../db/data.json"
// 왜 얘는 파일 주소를 쓸때 점이 하나가 아니라 두 개를 쓸까?

export default function Daylist() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
            });
    }, []);
    // 만약 fetch()를 useEffect 없이 사용한다면 어떻게 될까? 

    return(
        <ul className="list_day">
            {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day} </Link>
            </li>
            ))}    
        </ul>
    );
}

/*map함수에 대한 공부
map은 배열을 받아 새로운 배열을 반환함. 
Q: dummy.days.day로 받아와도 될 것 같은데 꼭 map을 써야 하는 이유가 있을까?
A: map을 사용하는 이유는 반복되는 작업을 피하기 위해서다. 만약 dummy.days.day로 각 요소를 반아오려 했다면 필요한 코드가 늘어났을 것.
아마도 이렇게...
const id = dummy.day.id;
const day = dummy.days.day
<li key=>{id=1}>Day{day=1}</li>
<li key=>{id=2}>Day{day=2}</li>
<li key=>{id=3}>Day{day=3}</li>
<li key=>{id=4}>Day{day=4}</li>
...
*/

/*key란?
key는 반복되는 요소에 고유한 값을 넣어주는 것. 순서가 일정하지 않은 경우에 사용한다.
HTML에서 id나 class를 넣어주는 이유와 비슷하다고 볼 수 있을 것 같다.*/

/*Do it!
{dummy.days.map(days =><li key={days.id}>Day {days.day}</li>)}
{dummy.days.map((days) =><li key={days.id}>Day {days.day}</li>)}
{dummy.days.map(days =>(<li key={days.id}>Day {days.day}</li>))}
{dummy.days.map((days) =>(<li key={days.id}>Day {days.day}</li>))}
*/

/*Don't!
{dummy.days.map(function days() {<li key={days.id}>Day {days.day}</li>})}
{dummy.days.map(function(days) => <li key={days.id}>Day {days.day}</li>)}    
map function uses callbakFunction, but don't write "function"
*/

/*<Link to={`/day/${day.day}`}>Day {day.day} </Link>에서 ``부분을 {}로 감싼것에 주의할 것!
개인적으로는 `/day/${day.day}`자체를 하나의 변수로써 처리한 것이 아닌가 생각함. 한 덩어리로 만들어 버린 느낌*/