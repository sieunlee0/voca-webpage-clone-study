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
                <button onClick={ toggleShow }>뜻 {isShow ? "숨기기" : "보기" }</button>
                {/* Q: 위의 {isShow ? "숨기기" : "보기" }에서 ?는 무슨 의미지?
                A: 내가 이해한 바로는 isShow가 어떨 때는 false고 어떨 때는 true가 될 수 있다는 의미이고,
                그 값이 바뀔 때마다 "숨기기"와 "보기"가 왔다갔다 하게 만들어 둔 것 같다.
                클릭 이벤트가 발생할 때, true가 돠고 먼저 쓰인 "숨기기" 보인다.
                다시 클릭하면 false가 되고 "보기"로 바뀐다.
                 */}
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}