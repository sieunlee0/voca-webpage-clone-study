import { Link } from "react-router-dom";

export default function EmptyPage() {
    return(
        <body>
            <h2>Wrong acception!</h2>
            <Link to="/">Back to the first page</Link>
        </body>
    )
}