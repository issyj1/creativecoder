import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navTree } from "../data/navdata";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
    
      <nav className="navbar">

        <div className="nav-left">
          <Link to="/">Isabelle Johnson</Link>
        </div>

        <div className="nav-center">
          <Link to="/#work">About</Link>
        </div>

        <div className="nav-right">
          <button
            className="contact-trigger"
            onClick={() => setContactOpen(true)}
          >
            Contact ↗
            
          </button>
          
        </div>
        &#9733;
      </nav>

      {/* CONTACT OVERLAY */}

      <div
        className={`contact-overlay ${contactOpen ? "active" : ""}`}
        aria-hidden={!contactOpen}
      >

        <button
          className="contact-close"
          onClick={() => setContactOpen(false)}
          aria-label="Close contact"
        >
          Close ×
        </button>

        <div className="contact-content">

          <p className="contact-label">GET IN TOUCH</p>

          <h2>
          <span className="font-three">Get</span>{" "}

            
            <br />
            <span className="font-two">in</span>{" "}

            <br />
            <span className="font-one">touch</span>{" "}
            
            
          </h2>

          <div className="contact-details">

            <div>
            

              <span>Email</span>
              <span className="font-five">
              <a href="isabellejohnson826@gmail.com">
                hello@example.com ↗
              </a>
              </span>{" "}
            </div>

            <div>
              <span>LinkedIn</span>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
