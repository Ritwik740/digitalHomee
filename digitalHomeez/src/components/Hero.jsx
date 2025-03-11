import { useState, useEffect } from "react";
import "./Hero.css"; // Import CSS for styling

const Hero = () => {
  const headingText = "Work With Us / Collaborate With Us";
  const staticText = "Partner with DH Genix Media for ";
  const services = ["digital marketing", "branding", "content creation", "web development"];

  const typingSpeed = 100; // Speed of letter appearance (ms)
  const resetDelay = 2000; // Delay before restarting (ms)
  const serviceSwitchDelay = 1000; // Delay between service transitions

  const [typedHeading, setTypedHeading] = useState("");
  const [headingIndex, setHeadingIndex] = useState(0);

  const [typedService, setTypedService] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  const [animationCycle, setAnimationCycle] = useState(0); // Used to track full animation cycle

  // Typing animation for heading (restarts after all services finish)
  useEffect(() => {
    if (headingIndex < headingText.length) {
      const timeout = setTimeout(() => {
        setTypedHeading((prev) => prev + headingText[headingIndex]);
        setHeadingIndex(headingIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [headingIndex, animationCycle]); // Reset animation when cycle restarts

  // Typing animation for services (one by one)
  useEffect(() => {
    if (headingIndex === headingText.length) { // Start services only after heading is complete
      if (serviceIndex < services[currentService].length) {
        const timeout = setTimeout(() => {
          setTypedService((prev) => prev + services[currentService][serviceIndex]);
          setServiceIndex(serviceIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Remove current service text after delay and switch to the next service
        setTimeout(() => {
          setTypedService("");
          setServiceIndex(0);
          if (currentService + 1 === services.length) {
            // Restart entire animation cycle when all services are done
            setTimeout(() => {
              setTypedHeading("");
              setHeadingIndex(0);
              setCurrentService(0);
              setAnimationCycle((prev) => prev + 1); // Trigger animation reset
            }, resetDelay);
          } else {
            setCurrentService((prev) => prev + 1);
          }
        }, serviceSwitchDelay);
      }
    }
  }, [serviceIndex, currentService, headingIndex]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Blur Overlay */}
      <div className="hero-content">
        <h1>{typedHeading}</h1>
        <p>{staticText}<span className="animated-text">{typedService}</span></p>
      </div>
    </section>
  );
};

export default Hero;
