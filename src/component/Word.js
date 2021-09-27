import React from "react";
import { useState } from "react";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    /*Q: 초기값을 false로 주는 이유가 무엇일까?
    A: 위의 state를 만든 이유는 버튼을 눌렀을 때 단어의 뜻이 보이게 하려는 것이다.
    따라서, 처음에는 단어의 뜻이 보이지 말아야 하므로 안 보이게 false로 해놓은 것이다.
    */
    
    function toggleShow() {
        setIsShow(!isShow)
    }

    return(
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={ toggleShow }>뜻 보기</button>
                <button className="btn_del">단어 삭제</button>
            </td>
        </tr>
    );
}