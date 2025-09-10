export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Blog App</h3>
                    <p>A platform for writers and readers to share knowledge, experiences, and ideas.</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Lifestyle</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> Tolarbagh, Mirpur-1, Dhaka</li>
                        <li><i className="fas fa-phone"></i> +880 1643257542</li>
                        <li><i className="fas fa-envelope"></i> itsmyusedmail@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 Tanvir. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
