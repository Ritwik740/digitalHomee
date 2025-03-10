const Benefits = () => {
    const benefits = [
      "A growth-driven approach tailored to deliver results.",
      "Opportunities to expand your network and reach a broader audience.",
      "Collaboration with industry experts and seasoned marketers.",
      "A win-win model ensuring success for all parties involved.",
    ];
  
    return (
      <section className="benefits">
        <h2>Why Partner with DH Genix Media?</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index} className="collab-card">{benefit}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Benefits;
  