
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
  <span className="font-four">She specialises in digital design</span>{" "}
  and <span className="font-five">creative coding,</span>{" "}
  treating the internet as a versatile medium for creativity and design augmentation through computer programming.

  <span className="font-six"> She founded New World, an international creative studio</span>{" "}
  delivering innovative websites and digital experiences that are full of character, with a flair for the exuberance of high fashion.

  <span className="font-two">She has collaborated with prominent advertising agencies</span>{" "}
  including <span className="font-one">Mother and Saatchi and Saatchi,</span>{" "}
  as well as projects for Vogue France, EE and IKEA.

  <span className="font-two">Isabelle’s career began</span>{" "}
  as an advertising creative, the processes of which inform the way she approaches programming:
  <span className="font-one"> treating each website as a conceptual piece of communication</span>{" "}
  for her clients, finding the right concept, visuals and words that set off their story.

  <span className="font-three">Isabelle’s approach often integrates technical programming skills</span>{" "}
  with a <span className="font-two">restrained aesthetic sensibility,</span>{" "}
  resulting in ambitious websites that
  <span className="font-six"> function as digital art pieces.</span>{" "}
  Her work sits at the intersection of
  <span className="font-one"> disruptive ideas, fashion,</span>{" "}
  and contemporary art.

  <span className="font-two">By blending technology and artistic direction,</span>{" "}
  she creates immersive digital environments that challenge standard web structures and offer new ways of interacting with online content.
</h1>


        </section>

        {/* SELECTED WORK */}
       
      </main>

      <section className="photo-section">

</section>
    </>
  );
}
