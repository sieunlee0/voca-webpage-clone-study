import React from "react";

export default function Word({ word }) {
    return(
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
    );
}