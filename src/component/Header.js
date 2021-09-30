/*컴포난트를 작성하는 다양한 방법들
const Header = function() {
    return (<div className="header"></div>);
}


const Header = () => {
    return (
        <div className="header"></div>
    );
}

function Header() {
    return (
        <div className= "header"></div>
    );
}

위의 방법들은 따로 export를 해줘야 한다.
*/

import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
    return(
        <div className=" header">
            <h1>
                <Link to="/">Study English word</Link>
            </h1>

            <span className="menu">
                <Link to="create_word" className="link">
                    Add word
                </Link>
                <button href="#x" className="link">
                    Add Day 
                </button>
            </span>
        </div>
    );
};