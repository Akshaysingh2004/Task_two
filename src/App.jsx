import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./App.css";

export default function App() {

  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const products = [
    {id:1,name:"Smart Governance Dashboard",price:4999,category:"tech",img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"},
    {id:2,name:"AI Public Data Analytics Tool",price:6999,category:"tech",img:"https://images.unsplash.com/photo-1555949963-aa79dcee981c"},
    {id:3,name:"Digital Health Monitoring Kit",price:2999,category:"health",img:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"},
    {id:4,name:"Hospital Management System",price:8999,category:"health",img:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3"},
    {id:5,name:"E-Governance Payment Gateway",price:1999,category:"finance",img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3"},
    {id:6,name:"Tax Automation Platform",price:2499,category:"finance",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f"},
    {id:7,name:"Citizen Feedback System",price:3499,category:"tech",img:"https://images.unsplash.com/photo-1521791136064-7986c2920216"},
    {id:8,name:"Smart City Surveillance System",price:9999,category:"tech",img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d"},
    {id:9,name:"Telemedicine Consultation App",price:3999,category:"health",img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef"},
    {id:12,name:"Public Budget Tracking System",price:2899,category:"finance",img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85"},
    {id:13,name:"AI Chatbot for Citizen Services",price:5499,category:"tech",img:"https://images.unsplash.com/photo-1531746790731-6c087fecd65a"},
    {id:14,name:"Emergency Response Health System",price:7499,category:"health",img:"https://images.unsplash.com/photo-1516549655169-df83a0774514"},
    {id:15,name:"Digital Loan Management Platform",price:3299,category:"finance",img:"https://images.unsplash.com/photo-1601597111158-2fceff292cdc"}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);


  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <>
   
     <header>

  <div className="top-bar">
    <div className="container d-flex justify-content-end align-items-center">

      <div className="top-links">

        <a href="#">Events</a>
        <a href="#">Contact us</a>

        <div className="lang">
<img src="https://flagcdn.com/w20/gb.png" alt="English flag" />
          <span>ENG</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

      </div>

    </div>
  </div>

  <nav className="navbar navbar-light bg-white shadow-sm" role="navigation">
    <div className="container d-flex align-items-center justify-content-between">

      <a className="navbar-brand" href="#">
        <img src="src/assets/Logo.png" alt="Website Logo"/>
      </a>

      <div className="mobile-icons d-flex gap-5">
        <i className="fa-solid fa-magnifying-glass" aria-label="Search"></i>

        <button className="btn p-0 border-0" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-label="Open Menu">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className="desktop-menu d-flex align-items-center ms-auto">
        <a href="#" className="nav-link">About Us <i className="fa-solid fa-chevron-down arrow-icon"></i></a>
        <a href="#" className="nav-link">Areas of work <i className="fa-solid fa-chevron-down arrow-icon"></i></a>
        <a href="#" className="nav-link">Products & Solutions <i className="fa-solid fa-chevron-down arrow-icon"></i></a>
        <a href="#" className="nav-link">Our Platform <i className="fa-solid fa-chevron-down arrow-icon"></i></a>
        <a href="#" className="nav-link">Ecosystem <i className="fa-solid fa-chevron-down arrow-icon"></i></a>
        <a href="#" className="nav-link">Resources <i className="fa-solid fa-chevron-down arrow-icon"></i></a>

        <i className="fa-solid fa-magnifying-glass ms-3" aria-label="Search"></i>

      </div>

    </div>
  </nav>

</header>

<aside className="offcanvas offcanvas-start" id="mobileMenu">

  <div className="offcanvas-header">
    <button className="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>

  <div className="offcanvas-body">

    <ul className="mobile-menu">
      <li>About Us <i className="fa-solid fa-chevron-down"></i></li>
      <li>Areas of work <i className="fa-solid fa-chevron-down"></i></li>
      <li>Products & Solutions <i className="fa-solid fa-chevron-down"></i></li>
      <li>Our Platform <i className="fa-solid fa-chevron-down"></i></li>
      <li>Ecosystem <i className="fa-solid fa-chevron-down"></i></li>
      <li>Resources <i className="fa-solid fa-chevron-down"></i></li>
    </ul>

  </div>
</aside>
<main>
  <section className="hero-section hero-bg">
  <div className="container">
    <div className="row">

      <div className="col-lg-6 hero-content">

        <h1>
          20 years of digital transformation in public service delivery <br/>
          <span className="highlight">It's possible.</span>
        </h1>

        <p>
          Catalysts. Ecosystem enablers. Problem Solvers.
          At eGov, we’re driven by the power of open digital infrastructure
          and ecosystems to enable governments deliver accessible,
          inclusive and transparent services to every citizen.
        </p>

        <div className="hero-btns">
          <a href="#" className="btn btn-primary-custom">Our Approach</a>
          <a href="#" className="btn btn-outline-custom">Our Impact</a>
        </div>

      </div>

    </div>
  </div>
</section>
<section className="citizens-section">
  <div className="container citizens-content">
    <div className="row align-items-start">

      <div className="col-lg-7">
        <h1 className="citizens-count">
          1,000,000,<span id="counter">001</span>+
        </h1>
      </div>

      <div className="col-lg-5">
        <p className="citizens-text">
          Citizens availing public services through eGov’s Digital Public Goods
        </p>
      </div>

    </div>
  </div>

  <div className="public-services-stats container">
    <div className="row text-center text-md-start">

      <article className="col-md-6 public-services-item mb-3">
        <h2>1.1 Billion+</h2>
        <p>Public services delivered</p>
      </article>

      <article className="col-md-6 public-services-item">
        <h2>50+ partners</h2>
        <p>From technology, governments and NGOs</p>
      </article>

    </div>
  </div>

</section>
<section className="big-problems-section">
  <div className="container">
    <div className="bold-approach-box">

      <div className="row g-5">
        <div className="col-lg-5">

          <h2 className="big-problems-heading">
            Big problems need
            <strong>bold approaches</strong>
          </h2>

          <nav className="nav flex-column mt-4">
            <button className="public-category-btn active">Public Health</button>
            <button className="public-category-btn">Public Finance</button>
            <button className="public-category-btn">Local Governance</button>
            <button className="public-category-btn">Water & Sanitation</button>
          </nav>

        </div>

        <div className="col-lg-7">

          <div className="row g-4">

            <article className="col-md-6">
              <div className="public-service-card health-card">
                <h2>210+</h2>
                <p>cities LIVE with ICU setup across India</p>
                <button className="read-more">Read More</button>
                <img src="src/assets/ICU-Equipment.G16.2k-1-3.png" className="service-image" />
              </div>
            </article>

            <article className="col-md-6">
              <div className="public-service-card vaccine-card">
                <h2>2 Bn</h2>
                <p>Vaccination certificates issued</p>
                <button className="read-more">Read More</button>
                <img src="src/assets/covid-vaccine-1.png" className="service-image" alt="" />
              </div>
            </article>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>
<section className="reimagine container">
  <h1>
    20 years of reimagining for citizens and <br />
    <span className="highlights">sustaining change</span>
  </h1>
  <p>
    Technology is powerful, but is only one piece of the puzzle...
  </p>
  <div className="row justify-content-center g-4">
    <article className="col-lg-5 col-md-6">
      <div className="video-card">
        <img src="src/assets/thumb-1.jpg" alt />
      </div>
    </article>
    <article className="col-lg-5 col-md-6">
      <div className="video-card">
        <img src="src/assets/thumb-2.png" alt />
      </div>
    </article>
  </div>
  <div className="about">
    <a href="#">About Us</a>
  </div>
</section>

<section className="digit-platform-section">
  <div className="container platform-wrapper">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="platform-content">
          <img src="src/assets/digit-n.png" className="digit-logo" alt="DIGIT Logo" />
          <h5 className="open-source-text">Our open source</h5>
          <h2 className="platform-main-title">
            technology-for-good <br /> platform
          </h2>
          <p className="platform-description">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors
          </p>
          <button className="explore-platform-btn">
            Explore the platform
          </button>
        </div>
      </div>
    </div>
  </div>
  <img src="src/assets/DIGIT-Image-Only.png" className="platform-girl-image" alt="DIGIT Platform" />
</section>

     
     

  
      <section className="egov-section">
        <div className="container">

          <h2 className="egov-title">Latest at <span>eGov</span></h2>

          <div className="filters">
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="tech">Tech</option>
              <option value="health">Health</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          {loading ? (
            <div className="loading">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-data">No results found </div>
          ) : (
            <div className="row mt-4 g-4">
              {filteredProducts.map(product => (
                <div className="col-lg-4 col-md-6" key={product.id}>
                  <div className="egov-card">

                    <span className="badge-cat">{product.category}</span>

                    <img src={product.img} alt={product.name} />

                    <div className="egov-content">
                      <h5>{product.name}</h5>
                      <div className="price">₹{product.price}</div>
                      <a href="#" className="card-btn">View Details</a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
</main>
      
<div>
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <img src="src/assets/Logo.png" className="footer-logo" />
          <p>
            Catalysing digital transformation in<br />
            public service delivery at speed &amp; scale.
          </p>
          <div className="social-icons d-flex">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-x-twitter" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <h5>Useful Links</h5>
          <div className="row">
            <div className="col-6">
              <a href="#">Home</a>
              <a href="#">Our Impact</a>
              <a href="#">DIGIT Sandbox</a>
            </div>
            <div className="col-6">
              <a href="#">Our People</a>
              <a href="#">Financials</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <h5>Subscribe Now</h5>
          <p>
            Receive regular updates of our monthly newsletter<br />
            DOT – in your inbox.
          </p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Your Email" />
            <button><i className="fa-solid fa-envelope" /></button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="footer-bottom">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div>©2024. eGov. All Rights Reserved.</div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
}