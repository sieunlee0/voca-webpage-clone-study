import React from "react";
import { Link } from "react-router-dom";

export default function EmptyPage() {
    return(
        <body>
            <h2>Wrong acception!</h2>
            <Link to="/">Back to the first page</Link>
        </body>
    );
}

/*
<body>태그가 사실은 강의에서는 <> 이렇게 그저 비어 있는 태그 였는데,
내꺼에서는 오류로 떠서 일단 body태그로 대체 했다.
*/