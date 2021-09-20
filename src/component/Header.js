// const Header = function() {
//     return (<div className="header"></div>);
// }


// const Header = () => {
//     return (
//         <div className="header"></div>
//     );
// }

export default function Header() {
    return(
        <div className=" header">
            <h1>
                <a href="/">Study English word</a>
            </h1>

            <div className="menu">
                <button href="x#" className="link">
                    Add word
                </button>
                <button href="#x" className="link">
                    Add Day 
                </button>
            </div>
        </div>
    );
};