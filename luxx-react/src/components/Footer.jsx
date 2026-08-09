import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="luxx-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Luxx</h2>
          <p>Refined spirits. Unforgettable nights.</p>
        </div>

        {/* Shop Navigation Links */}
        <div className="footer-links">
          <h3>Shop</h3>
          <ul>
            <li><a href="#shop">All Products</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#best-sellers">Best Sellers</a></li>
            <li><a href="#offers">Special Offers</a></li>
          </ul>
        </div>

        {/* About Section Links */}
        <div className="footer-about">
          <h3>About</h3>
          <ul>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Icons */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 712 345 678</p>
          <p>📧 support@luxxspirits.com</p>

          <div className="footer-socials">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/yourpage" target="_blank" rel="noreferrer"><i className="fab fa-x-twitter"></i></a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        <p>&copy; 2025 Luxx. Crafted with ❤️ in Kenya.</p>
      </div>
    </footer>
  );
}
