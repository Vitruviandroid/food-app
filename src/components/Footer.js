// import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-section">
                    <p className="footer-title">FoodiesHub.com</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid quas qui dignissimos nesciunt nisi animi nobis laudantium sapiente commodi.</p>
                </div>
                <div className="footer-section">
                    <p className="footer-title">Contact Us</p>
                    <a className="footer-link" href="#">foodieshub@gamil.com</a>
                    <a className="footer-link" href="#">+342-5324-9454</a>
                    <a className="footer-link" href="#">2393 Street NYC</a>
                </div>
                <div className="footer-section">
                    <p className="footer-title">Socials</p>
                    <a className="footer-link" href="#">Faceboock</a>
                    <a className="footer-link" href="#">Twitter</a>
                    <a className="footer-link" href="#">Instagram</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;