import dummy from "../db/data.json"
// 왜 얘는 파일 주소를 쓸때 점이 하나가 아니라 두 개를 썼을까?

export default function Daylist() {
    console.log(dummy);
    return(
        <ul className="list_day">
            {dummy.days.map(days => <li key={days.id}>Day {days.day}</li>)}    
        </ul>
    );
}

// map은 배열을 받아 새로운 배열을 반환함. 
// dummy.days.day로 받아외도 될 것 같은데 꼭 map을 써야 하는 이유가 있을까?
// ->map을 사용하는 이유는 반복되는 작업을 피하기 위해서다. 만약 dummy.days.day로 각 요소를 반아오려 했다면 li태그가 4개로 늘어났을 것이다.


// key는 반복되는 요소에 고유한 값을 넣어주는 것. 순서가 일정하지 않은 경우에 사용한다.
// HTML에서 id나 class를 넣어주는 이유와 비슷하다고 볼 수 있을 것 같다.


// Do it!
// {dummy.days.map(days =><li key={days.id}>Day {days.day}</li>)}
// {dummy.days.map((days) =><li key={days.id}>Day {days.day}</li>)}
// {dummy.days.map(days =>(<li key={days.id}>Day {days.day}</li>))}
// ((days) =>(<li key={days.id}>Day {days.day}</li>))}  

// Don't!
// {dummy.days.map(function days() {<li key={days.id}>Day {days.day}</li>})}
// map function uses callbakFunction, but don't write "function"