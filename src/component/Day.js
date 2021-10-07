/*컴포넌트를 작성하는 다양한 방법들
const Day = function (){
    ...
}

const Day = ()=>{
    ...
}

function Day() {
    ...
}

위의 방법들은 따로 export를 해줘야 한다.
*/

import React from 'react';
import { useParams } from 'react-router-dom';
/* Q: useParams는 무엇일까?
A:useParams는 URL 인자들의 key/value(키/값) 짝들의 객체를 반환한다. */
import Word from './Word';
/*얘는 왜 './componet/Word'라고 안 쓸까? 오류가 났다*/
import useFetch from "../hooks/useFetch";
import ChangePage from './ChangPage';



export default function Day() {

    const { day } = useParams();
    /* 같은 코드 다른 형식
    const a = useParame();
    const day = a.day;
    = const day = useParams().day;
    = const { day } = useParame();
    */

    // const wordList = dummy.words.filter(word => word.day === Number(day));
    /* useParams가 주소를 가져오는데 주소는 string으로 되어 있다. 
    word.day는 number이기 때문에 useParams로 가져온 주소에 있는 day를 number로 바꿔 주어야 한다.*/
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch(`http://localhost:3001/days`);

    return(
        <body id="wordBox" >
            <h2 id="dayNumber">Day {day} </h2>
            <table id="wordTable">
                <tbody>
                    {words.map(word => (
                        <Word word={ word } key={ word.id }/>
                    ))}
                </tbody>
            </table>
            <ChangePage days={ days }/>
        </body>
    );
}

//<table>, <tbody>, <tt>, <td>, <body> 태그에 대해 공부해야 할 듯 