import dummy from "../db/data.json"
// 왜 얘는 파일 주소를 쓸때 점이 하나가 아니라 두 개를 썼을까?

export default function Daylist() {
    console.log(dummy);
    return(
        <ul className="list_day">
            {dummy.days.map(day =><li key={day.id}>Day {day.day}</li>)}    
        </ul>
    );
}

// map은 배열을 받아 새로운 배열을 반환함. 
// dummy.days.day로 받아외도 될 것 같은데 꼭 map을 써야 하는 이유가 있을까?
// ->map을 사용하는 이유는 반복되는 작업을 피하기 위해서다. 만약 dummy.days.day로 각 요소를 반아오려 했다면 li태그가 4개로 늘어났을 것이다.


// key는 반복되는 요소에 고유한 값을 넣어주는 것. 순서가 일정하지 않은 경우에 사용한다.

