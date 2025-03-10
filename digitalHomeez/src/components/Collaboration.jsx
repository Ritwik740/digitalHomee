const Collaboration = () => {
    const partners = [
      { title: "Business Partnerships", desc: "Grow together with cross-promotions and shared strategies." },
      { title: "Freelancers & Experts", desc: "Join us in digital marketing, SEO, branding, content creation." },
      { title: "Agencies & Providers", desc: "Deliver top-notch marketing solutions together." },
      { title: "Influencers & Creators", desc: "Amplify brand reach through innovative strategies." },
    ];
  
    return (
      <section className="collaboration">
        <h2>How We Can Collaborate</h2>
        <div className="collab-grid">
          {partners.map((partner, index) => (
            <div key={index} className="collab-card">
              <h3>{partner.title}</h3>
              <p>{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Collaboration;
  