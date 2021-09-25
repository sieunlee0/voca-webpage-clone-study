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
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
// useParams는 무엇일까?

export default function Day() {

    const { day } = useParams();
    /* 같은 코드 다른 형식
    const a = useParame();
    const day = a.day;
    = const day = useParams().day;
    = const { day } = useParame();
    */

    const wordList = dummy.words.filter(word => (word.day === day));

    return(
        <body>
            <h2>Day {day} </h2>
            <table>
                <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </body>
    );
}

//<table>, <tbody>, <tt>, <td>, <body> 태그에 대해 공부해야 할 듯 