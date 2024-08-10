import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="../src/assets/images/logo_navbar_bnw.png" alt="Logo" style={{ height: "40px" }}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/aline">Assembly Line</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/dart">Decentral Art</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/roger">Roger Kilimangaro</Link>
                        </li>

                    </ul>
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar