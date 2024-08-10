import './Footer.css';

export function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <p className="followus">Follow Us</p>
                <div className="social">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item"><a href="#">Terms and Conditions</a></li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p className="copyright">© 2021 Decentral Artist. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;