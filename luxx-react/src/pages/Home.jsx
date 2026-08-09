import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import Footer from "../components/Footer";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="navbar">
        <div className="logo">Luxx</div>
        <nav className={`navlinks${navOpen ? " show" : ""}`} id="navLinks">
          <a href="#Home">Home</a>
          <a href="#products">Products</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </nav>
        <div
          className="hamburger"
          id="hamburger"
          onClick={() => setNavOpen(!navOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
        </div>
      </header>

      {/* Hero section with background video */}
      <div className="video-container">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => console.log("Video loaded")}
          onError={(e) => console.error("Video error", e)}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main>
        <section className="hero">
          <div className="overlay" />
          <div className="hero-content">
            <h1>Welcome to Luxx</h1>
            <p>
              where flavor meets finesse. Take a sip, take a moment, take it all
              in
            </p>
            <button className="btn" onClick={() => navigate("/shop")}>
              Shop Now
            </button>
          </div>
        </section>

        {/* Featured product cards */}
        <section className="products-section" id="products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="/assets/image14.jpg" alt="Wine" />
              <h3>Wines</h3>
              <p>Ksh. 2,000</p>
              <div className="product-description">
                Red, white & sparkling wines to suit every palate
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#wines")}
              >
                Shop Wines
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image48.jpeg" alt="Cocktails" />
              <h3>Cocktails</h3>
              <p>Ksh. 2,100</p>
              <div className="product-description">
                Top-shelf bourbon, Scotch & Irish whiskeys.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#whiskey")}
              >
                Shop Whiskeys
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image20.jpg" alt="Whiskey" />
              <h3>Whiskeys</h3>
              <p>Ksh. 3,000</p>
              <div className="product-description">
                Premium and aged whiskeys for the refined taste.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#whiskey")}
              >
                Shop Whiskeys
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image19.jpg" alt="Vodka" />
              <h3>Vodka</h3>
              <p>Ksh. 2,500</p>
              <div className="product-description">
                Crisp and smooth vodkas, perfect for mixing.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#vodka")}
              >
                Shop Vodka
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image7.jpg" alt="Beer" />
              <h3>Beers</h3>
              <p>Ksh. 1,500</p>
              <div className="product-description">
                Craft, lager & imported beers for every mood.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#beer")}
              >
                Shop Beers
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image3.avif" alt="Gin" />
              <h3>Gin</h3>
              <p>Ksh. 3,200</p>
              <div className="product-description">
                Botanical gin blends for classic cocktails.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#all")}
              >
                Shop Gin
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/soda1.avif" alt="Soft Drinks" />
              <h3>Soft Drinks</h3>
              <p>Ksh. 2,550</p>
              <div className="product-description">
                Mixers, sodas & fresh juices to complete your order.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#softdrinks")}
              >
                Shop Drinks
              </button>
            </div>

            <div className="product-card">
              <img src="/assets/image2.avif" alt="Non-Alcoholic" />
              <h3>Non-Alcoholic</h3>
              <p>Ksh. 1,050</p>
              <div className="product-description">
                Mocktails, zero-alcohol wines & more.
              </div>
              <button
                className="buy-btn"
                onClick={() => navigate("/shop#all")}
              >
                Shop Non-Alcoholic
              </button>
            </div>
          </div>
        </section>

        <section className="categories-section" id="shop-by-category">
          <h2>Shop by Categories</h2>

          <div className="scroll-wrapper">
            <div className="scroll-track">
              <div className="category-card">
                <img src="/assets/image14.jpg" alt="Wine" />
                <h3>Wines</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image20.jpg" alt="Whiskey" />
                <h3>Whiskeys</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image19.jpg" alt="Vodka" />
                <h3>Vodka</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image7.jpg" alt="Beer" />
                <h3>Beers</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image3.avif" alt="Gin" />
                <h3>Gin</h3>
              </div>
              <div className="category-card">
                <img src="/assets/soda1.avif" alt="Soft Drinks" />
                <h3>Soft Drinks</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image2.avif" alt="Non-Alcoholic" />
                <h3>Non-Alcoholic</h3>
              </div>

              {/* Repeating for infinite effect */}
              <div className="category-card">
                <img src="/assets/image14.jpg" alt="Wine" />
                <h3>Wines</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image20.jpg" alt="Whiskey" />
                <h3>Whiskeys</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image19.jpg" alt="Vodka" />
                <h3>Vodka</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image7.jpg" alt="Beer" />
                <h3>Beers</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image3.avif" alt="Gin" />
                <h3>Gin</h3>
              </div>
              <div className="category-card">
                <img src="/assets/soda1.avif" alt="Soft Drinks" />
                <h3>Soft Drinks</h3>
              </div>
              <div className="category-card">
                <img src="/assets/image2.avif" alt="Non-Alcoholic" />
                <h3>Non-Alcoholic</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <i className="fas fa-shopping-cart"></i>
              <h3>Browse & Order</h3>
              <p>Choose your drinks and add them to your cart.</p>
            </div>
            <div className="step">
              <i className="fas fa-credit-card"></i>
              <h3>Secure Checkout</h3>
              <p>Pay via M-Pesa, card, or cash on delivery.</p>
            </div>
            <div className="step">
              <i className="fas fa-truck"></i>
              <h3>Fast Delivery</h3>
              <p>We deliver to your doorstep in under 1 hour.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}