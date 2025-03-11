import "./Services.css";

const Services = () => {
  const services = [
    {
      category: "PPC Services",
      items: [
        "Google Ads Management",
        "Meta (Facebook & Instagram) Ads",
        "LinkedIn, Twitter & TikTok Ads",
        "Retargeting & Remarketing",
        "Landing Page Optimization",
        "Conversion Tracking & Analytics",
      ],
    },
    {
      category: "SEO",
      items: [
        "On-Page SEO",
        "Technical SEO",
        "Off-Page SEO & Link Building",
        "Local SEO (Google My Business Optimization)",
        "Content Marketing & Blogging",
        "E-commerce SEO",
        "SEO Audit & Performance Tracking",
      ],
    },
    {
      category: "GMB SEO",
      items: [
        "GMB Profile Setup & Optimization",
        "Local Keyword Targeting",
        "Google Posts & Content Strategy",
        "Customer Reviews & Reputation Management",
        "Google Maps Ranking & Local Citations",
        "Photos & Video Optimization",
        "Technical GMB SEO & Tracking",
      ],
    },
    {
      category: "Website Development",
      items: [
        "Static, Dynamic & WordPress Websites",
        "PHP, HTML, React, Flask, MERN",
        "Custom Website Design & Development",
        "E-Commerce Website Development",
        "Business & Corporate Websites",
        "Real Estate Website Development",
        "Landing Page & Sales Funnel Design",
        "Web Maintenance & Support",
        "SEO-Friendly Website Development",
      ],
    },
    {
      category: "Social Media Marketing (SMM)",
      items: [
        "Social Media Strategy & Planning",
        "Social Media Management",
        "Content Creation & Branding",
        "Paid Social Media Advertising",
        "Influencer Marketing & Collaborations",
        "Social Media Analytics & Reporting",
      ],
    },
    {
      category: "Photoshoot Services",
      items: [
        "Custom Photos for Ads & Marketing",
        "360° Virtual Tours",
        "E-commerce Product Shoots",
        "Influencer & Personal Branding Shoots",
      ],
    },
    {
      category: "Other Services",
      items: [
        "Performance Marketing",
        "Local Business SEO",
        "Complete Branding",
        "Video Editing",
        "Influencer Marketing",
        "E-mail Marketing",
        "Website Development (Shopify, WordPress, Landing Pages)",
        "Graphic & Logo Designing",
      ],
    },
    {
      category: "Packages",
      items: [
        "360 Marketing - PPC (Meta & Google), SMM, SEO, Web",
        "Branding - PPC, SMM (Full Packages), Competitor Analysis, New Strategies",
        "SEO - Website SEO",
        "Local SEO - GMB, Marketplace Listings, Local Website SEO",
        "Website - Web Building, Maintenance, Basic SEO",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.category}</h3>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
