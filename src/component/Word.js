import React from "react";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    // 초기값을 false와 같은 boolea형식으로 주는 것과 다른 형식과의 차이는 무엇일까?
    return(
        <tr>
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