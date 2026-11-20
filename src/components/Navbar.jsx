
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [testimonialsOpen, setTestimonialsOpen] = useState(false);

  const testimonials = [
    {
      name: (
        <>
          Susan <span className="font-one">Hosking</span>, Executive Creative Director
          <span className="font-two"> International</span>, Mother London
        </>
      ),      quote: (
        <>
          I always love it when Issy has come to me with{" "}
          <span className="font-three">ideas.</span>{" "}
          She’s driven, smart and interesting, and has such a broad skillset,
          she can approach ideas from a variety of{" "}
          <span className="font-two">fresh angles</span>{" "}
          to bring them to life.
        </>
      )
    },

    {
      name: (
        <>
          Lottie S<span className="font-four">ole</span>, Senior
          <span className="font-two"> Creative</span>, TBWA Media Arts Lab
          <span className="font-three"> Los Angeles</span>
        </>
      ),      
      quote: (
        <>
          Issy has great{" "}
          <span className="font-one">creative flair</span>{" "}
          and drive on every project she touches! From concepting through to
          execution, Issy’s wide range of skills and experience across big and
          small brands make her an{" "}
          <span className="font-three">asset</span>{" "}
          to any creative brief.
        </>
      )
    },

    {
      name: "Person Three",
      quote: (
        <>
          Add your third testimonial here. You can style{" "}
          <span className="font-two">individual words</span>{" "}
          differently, use different fonts and create your own typographic
          combinations.
        </>
      )
    }
  ];

  return (
    <>
      <nav className="navbar">

        <div className="nav-left">
          <Link to="/">Isabelle Johnson</Link>
        </div>

        <div className="nav-center">
          <button
            className="contact-trigger"
            onClick={() => setTestimonialsOpen(true)}
          >
            Testimonials ↗
          </button>
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

      {/* TESTIMONIALS OVERLAY */}

      <div
        className={`contact-overlay ${testimonialsOpen ? "active" : ""}`}
        aria-hidden={!testimonialsOpen}
      >

        <button
          className="contact-close"
          onClick={() => setTestimonialsOpen(false)}
          aria-label="Close testimonials"
        >
          Close ×
        </button>

        <div className="testimonials-content">

          <p className="contact-label">
            Test<span className="font-four">imonials</span>{" "}
            &#9733;
          </p>

          <h2 className="testimonials-heading">
            <span className="font-three">What</span>{" "}
            <br />
            <span className="font-two">people</span>{" "}
            <br />
            <span className="font-one">say</span>
          </h2>

          <div className="testimonials-list">

            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>

                <h3>{testimonial.name}</h3>

                <p>{testimonial.quote}</p>

              </div>
            ))}

          </div>

        </div>
      </div>

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

          <p className="contact-label">
            Hello! &#9733;
          </p>

          <h2>
            <span className="font-three">Get</span>{" "}
            <br />
            <span className="font-two">in</span>{" "}
            <br />
            <span className="font-one">touch</span>
          </h2>

          <div className="contact-details">

            <div>
              <span>Email</span>
              <span className="font-five">
                <a href="mailto:isabellejohnson826@gmail.com">
                  me here ↗
                </a>
              </span>
            </div>

            <div>
              <span>Or</span>
              <a
                href="https://www.linkedin.com/in/isabelle-johnson-844a9a109/"
                target="_blank"
                rel="noreferrer"
              >
                on LinkedIn ↗
              </a>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
