const Services = () => {
    const services = [
      { title: "SEO & Marketing", desc: "Boost your brand's visibility with our expert SEO strategies." },
      { title: "Branding", desc: "Create a unique identity that stands out in the market." },
      { title: "Content Creation", desc: "Engage your audience with high-quality, impactful content." },
    ];
  
    return (
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  