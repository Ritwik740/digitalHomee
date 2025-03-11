import { useState, useEffect } from "react";
import "./Hero.css"; // Import CSS for styling

const Hero = () => {
  const fullText = "Work With Us / Collaborate With Us";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Speed of letter appearance (in ms)
  const resetDelay = 2000; // Delay before restarting (in ms)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Restart the animation after a delay
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, resetDelay);
    }
  }, [index, fullText]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Blur Overlay */}
      <div className="hero-content">
        <h1>{text}</h1>
        <p>Partner with DH Genix Media for digital marketing, branding, content creation, and more.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
