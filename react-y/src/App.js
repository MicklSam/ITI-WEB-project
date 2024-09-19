import logo from './logo.svg';
import './App.css';
import FirstOrder from './components/firstOrder';
import Navbar from './components/Navbar';
import "./imagestyle.css"
import rectangleImage from './images/Rectangle 2.png';
import VSlogo from './images/Group.png'
import Zlogo from "./images/zara-logo-1 1.png"
import Glogo from "./images/gucci-logo-1 1.png"
import Plogo from "./images/prada-logo-1 1.png"
import CKlogo from "./images/Group (1).png"
import casual from "./images/casual.png"
import formal from "./images/formal.png"
import party from "./images/party.png"
import gym from "./images/gym.png"
import React, { useState } from 'react';
import "./hom3.css"
import Slider from 'react-slick';  // For the slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewsletterSubscription from './components/NewLetterSubscription';
import Footer from './components/Footer';
import one from "./images/Frame 31.png"
import two from "./images/Frame 32.png"
import three from "./images/Frame 33.png"
import four from "./images/Frame 33 (1).png"
import five from "./images/Frame 34.png"
import six from "./images/Frame 35.png"
import seven from "./images/Frame 38.png"
import eight from "./images/Frame 38 (2).png"
import "./resp.css"

const newArrivals = [
  { name: 'T-shirt with Tape Details', price: '$120', oldPrice: '', image: one },
  { name: 'Skinny Fit Jeans', price: '$240', oldPrice: '$250', image: two },
  { name: 'Checkered Shirt', price: '$180', oldPrice: '', image: three },
  { name: 'Sleeve Striped T-shirt', price: '$130', oldPrice: '$160', image: four },
];

const topSelling = [
  { name: 'Vertical Striped Shirt', price: '$212', oldPrice: '$232', image: five },
  { name: 'Orange Graphic T-shirt', price: '$145', oldPrice: '', image: six },
  { name: 'Loose Fit Bermuda Shorts', price: '$80', oldPrice: '', image: seven },
  { name: 'Faded Skinny Jeans', price: '$210', oldPrice: '', image: eight },

];

const dressStyles = [
  { name: 'Casual', image: casual },
  { name: 'Formal', image: formal },
  { name: 'Party', image: party },
  { name: 'Gym', image: gym },
];

const customers = [
  { name: 'Sean M.', review: 'Love the quality...', rating: 5 },
  { name: 'Alex K.', review: 'Great price...', rating: 4 },
  { name: 'James L.', review: 'I’m really happy...', rating: 5 },
];

const ProductCard = ({ name, price, oldPrice, image }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p>
      <span className="price">{price}</span>
      {oldPrice && <span className="old-price">{oldPrice}</span>}
    </p>
  </div>
);


const SectionComponent = ({ title, products }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <button className="view-all">View All</button>
  </div>
);

const DressStyleCard = ({ name, image }) => (
  <div className="dress-style-card">
    <img src={image} alt={name} className="dress-style-image" />
    <div className="overlay">
      <h3 className="style-name">{name}</h3>
    </div>
  </div>
);

const CustomerReview = ({ name, review, rating }) => (
  <div className="review-card">
    <p>{review}</p>
    <div className="rating">{'★'.repeat(rating)}</div>
    <p className="name">{name}</p>
  </div>
);
function App() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (

    <div className="App">
      <FirstOrder />
      <div>
        <Navbar />
      </div>
      <div className="image-container">
    <img id="ads" src={rectangleImage} alt="Home image" style={{ width: "100%" }} />
    <div className="overlay2">
        <div className="text-content">
            <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
            <p>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
            </p>
            <button className="shop-now">Shop Now</button>
        </div>
        <div className="stats">
            <div className="stat-item">
                <h3>200+</h3>
                <p>International Brands</p>
            </div>
            <div className="stat-item">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
            </div>
            <div className="stat-item">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
            </div>
        </div>
    </div>
</div>


      <div className="top-banner logos">
        <a href="https://www.versace.com/row/en/" target="_blank" rel="noopener noreferrer">
          <img src={VSlogo} alt="Versace Logo" />
        </a>
        <a href="https://www.zara.com/eg/en/" target="_blank" rel="noopener noreferrer">
          <img src={Zlogo} alt="Zara Logo" />
        </a>
        <a href="https://www.gucci.com/?srsltid=AfmBOopIAGSOHky0NZbEaJHerZZ0leGnsqtwf5zVMBZvBg05gUdEiA-g" target="_blank" rel="noopener noreferrer">
          <img src={Glogo} alt="Gucci Logo" />
        </a>
        <a href="https://www.prada.com/ww/en.html" target="_blank" rel="noopener noreferrer">
          <img src={Plogo} alt="Prada Logo" />
        </a>
        <a href="https://www.calvinklein.us/en" target="_blank" rel="noopener noreferrer">
          <img src={CKlogo} alt="Calvin Klein Logo" />
        </a>
      </div>


      
      <SectionComponent title="New Arrivals" products={newArrivals} />
      <SectionComponent title="Top Selling" products={topSelling} />

      <div className="dress-style-section">
        <div className="container">
          <h2>Browse by Dress Style</h2>
          <div className="styles-grid">
            {dressStyles.map((style, index) => (
              <DressStyleCard key={index} {...style} />
            ))}
          </div>
        </div>
      </div>

      <div className="customer-reviews">
        <h2>Our Happy Customers</h2>
        <Slider {...sliderSettings}>
          {customers.map((customer, index) => (
            <CustomerReview key={index} {...customer} />
          ))}
        </Slider>
      </div>
      <NewsletterSubscription />
      <Footer />
    </div>




  );
}

export default App;
