// const Day = function (){
//     ...
// }

// const Day = ()=>{
//     ...
// }

// function Day() {
//     ...
// }

import React from 'react';
import dummy from '../db/data.json'

export default function Day() {

    const day = 2;
    const wordList = dummy.words.filter(word => (word.day === day));

    return(
        <>
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
        </>
    );
}

//<table>, <tbody>, <tt>, <td>에 대해 공부해야 할 듯 20