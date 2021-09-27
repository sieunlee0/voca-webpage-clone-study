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
/* Q: useParams는 무엇일까?
A: router의 path에 적은 주소를 가져오는 hook인 듯 하다. */

export default function Day() {

    const { day } = useParams();
    /* 같은 코드 다른 형식
    const a = useParame();
    const day = a.day;
    = const day = useParams().day;
    = const { day } = useParame();
    */

    const wordList = dummy.words.filter(word => word.day === Number(day));
    /* useParams가 주소를 가져오는데 주소는 string으로 되어 있다. 
    word.day는 number이기 때문에 useParams로 가져온 주소에 있는 day를 number로 바꿔 주어야 한다.*/

    return(
        <body>
            <h2>Day {day} </h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                            <td>
                                <button>뜻 보기</button>
                                <button className="btn_del">단어 삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </body>
    );
}

//<table>, <tbody>, <tt>, <td>, <body> 태그에 대해 공부해야 할 듯 