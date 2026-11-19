
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        ".name-letter",
        {
          opacity: 1,
          y: 4,
          rotate: 3,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.2,
          stagger: {
            each: 0.045,
            from: "random",
          },
          ease: "power3.out",
          delay: 0.3,
        }
      );
      // Opening screen: pin and animate the name as you scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "+=90%",
          pin: true,
          scrub: 0.3,
        },
      })
      .to(".home-title", {
        y: "-100vh",
        opacity: 0,
        ease: "none",
      });

      // Your existing biography entrance animation
      gsap.fromTo(
        ".intro-copy",
        {
          letterSpacing: "0.1em",
          lineHeight: "0.6em",
          fontSize: "0.9em",
        },
        {
          letterSpacing: "0.2em",
          lineHeight: "2em",
          fontSize: "1.1em",
          duration: 2.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
     
     
      <main className="main-content">

     

        {/* OPENING NAME SCREEN */}
        <section className="home-hero">

        

        <h1 className="home-title">
  <span className="first-name">
    {"Isabelle".split("").map((letter, i) => (
      <span className="name-letter" key={i}>{letter}</span>
    ))}
  </span>
  <br />
  <span className="last-name">
    {"Johnson".split("").map((letter, i) => (
      <span className="name-letter" key={i}>{letter}</span>
    ))}
  </span>
</h1>

        </section>
       
        


        {/* BIOGRAPHY WALL OF TEXT */}
        <section className="intro-section">
       
        <h1 className="intro-copy">
            <span className="font-one">Isabelle Johnson</span>{" "}
            <span className="font-two">is a multilingual art director</span>{" "}
            <span className="font-three">and developer.</span>{" "}
            <span className="font-four">She specialises in digital design and creative</span>{" "}
            <span className="font-five">coding, treating the internet as a </span>{" "}
            versatile medium for creativity and design augmentation

            through computer programming.
            <span className="font-six">As the founder of New World Creative Studio, her practice involves a high level of collaboration with prominent studios and brands including EE, Saatchi and Saatchi, Vogue France, as well as projects for IKEA.</span>{" "}
            <span className="font-two"> Isabelle’s career began </span>{" "}
         as an advertising creative, 
            <span className="font-two">the processes of which inform </span>{" "}
            <span className="font-one">the way she approaches programming:</span>{" "}
             treating each website as a conceptual piece of communication for her clients.






            <span className="font-three"> Isabelle’s approach often integrates technical </span>{" "}
            <span className="font-two">programming skills with a refined aesthetic</span>{" "}
            <span className="font-four">sensibility, resulting in websites</span>{" "}
            <span className="font-six">that function as digital art pieces.</span>{" "}
            <span className="font-four">Her work </span>{" "}
            <span className="font-one">sits on the intersection </span>{" "}
            <span className="font-two">of disruptive ideas, fashion, </span>{" "}
            <span className="font-one">and contemporary art.</span>{" "}
            <span className="font-two">By blending technology</span>{" "}

            and artistic direction,
            <span className="font-two">she creates immersive digital</span>{" "}
            <span className="font-four">environments that challenge</span>{" "}
            <span className="font-one">standard web structures</span>{" "}

            and offer new ways
            <span className="font-one">of interacting with online content.</span>{" "}
          </h1>

        </section>

        {/* SELECTED WORK */}
       
      </main>

      <section className="photo-section">

</section>
    </>
  );
}
