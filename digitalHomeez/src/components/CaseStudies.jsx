import { useState, useEffect } from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  const handleOutsideClick = (event) => {
    if (isMobile && !event.target.closest(".case-studies-container")) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile]);

  const caseStudiesData = [
    {
      title: "Branding Case Study",
      description: "Best ROI Examples in branding strategies.",
    },
    {
      title: "Scaling Case Study",
      description: "Scaling success in Real Estate, Banquet, and Food industries.",
    },
    {
      title: "GMB SEO Case Study (DH)",
      metrics: [
        { label: "Calls Before", value: "9 calls / month" },
        { label: "Calls After", value: "50+ calls / month" },
        { label: "Overview Before", value: "30 / month" },
        { label: "Overview After", value: "195 / month" },
      ],
    },
    {
      title: "Leads Case Study",
      description: "Generating leads effectively through digital marketing.",
    },
    {
      title: "SEO Case Study",
      metrics: [
        { label: "Website Before SEO", value: "2 Leads / month" },
        { label: "Website After SEO", value: "60 Leads / month" },
      ],
    },
    {
      title: "ROI Case Study",
      description: "Maximizing Return on Investment through strategic marketing.",
    },
    {
      title: "Marketing Optimization",
      description: "Enhancing marketing performance through data-driven decisions.",
    },
    
  ];

  return (
    <section id="case-studies" className="case-studies">
      <div
        className={`case-studies-container ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        {/* Central Circle */}
        <div className="central-circle">Case Studies</div>

        {/* Small Circles */}
        {caseStudiesData.map((study, index) => (
          <div key={index} className="case-study-card">

            {study.description && <p>{study.description}</p>}
            {study.metrics && (
              <ul>
                {study.metrics.map((metric, idx) => (
                  <li key={idx}>
                    <strong>{metric.label}:</strong> {metric.value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
