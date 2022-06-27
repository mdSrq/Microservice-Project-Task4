import { Link } from "react-router-dom";

function Header(Props) {
    return (
        <header>
            <div className="jumbotron">
                <h1 className="display-4">{Props.title}</h1>
            </div>
            <div className="links">
                    <Link  className="link-nav" to={`/home`}>Home </Link>
                    <Link  className="link-nav" to={`/add-server`}> Add Server</Link>
            </div>
        </header>
    );
}
export default Header;