import React from "react";
import { useState } from "react";

export default function Word({ word : w }) {
    const [word, setWord] = useState(w);
    /*export default function Word({ props }) {
    const [word, setWord] = useState(props.word);처럼도 쓸 있는데 에러가 떴다
    데이터를 처음부터 word라는 이름으로 내보내고 있어서 props라는 이름으로 받으려고 하면 찾지 못하는 것 같다*/
    const [isShow, setIsShow] = useState(false);
    /*Q: 초기값을 false로 주는 이유가 무엇일까?
    A: 위의 state를 만든 이유는 버튼을 눌렀을 때 단어의 뜻이 보이게 하려는 것이다.
    따라서, 처음에는 단어의 뜻이 보이지 말아야 하므로 안 보이게 false로 해놓은 것이다.
    */
    const [isDone, setisDone] = useState(word.isDone);


    function toggleShow() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        // setisDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone :!isDone
            }),
        })
        .then(res => {
            if(res.ok) {
                setisDone(!isDone);
            }
        });

    }


    function del() {
        if(window.confirm('Do you really want to delete the word?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    setWord({id:0});
                }
            });
        }
    }

    if(word.id === 0) {
        return null;
    }


    return(
        <tr className={isDone ? "off" : "on"}>
            <td>
                <input 
                    type="checkbox" 
                    checked={isDone} 
                    onChange={ toggleDone }
                />
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
                <button onClick={ del } className="btn_del">삭제</button>
            </td>
        </tr>
    );
}

/*
REST API
create : post
read : get
update : put
delete : delete
*/ 