import React, { useState } from "react";
import "./blogs.css";

const blogPosts = [
  {
    title: "Digital Marketing 101: A Beginner’s Guide for Business Owners",
    description:
      "Learn the fundamentals of digital marketing, including SEO, PPC, social media, and email marketing.",
    fullContent: `Digital marketing is essential for businesses today. It includes:
    - SEO (Search Engine Optimization)
    - PPC (Pay-Per-Click Advertising)
    - Social Media Marketing
    - Content Marketing
    - Email Marketing
    A strong digital marketing strategy can help businesses reach the right audience and grow their brand effectively.`,
  },
  {
    title: "How to Build a Powerful Online Presence for Your Business",
    description:
      "Discover high-impact strategies to enhance your digital footprint and attract more customers.",
    fullContent: `Building a strong online presence involves multiple strategies:
    - Creating high-quality content for your audience
    - Leveraging SEO to increase visibility on search engines
    - Engaging on social media platforms
    - Running targeted ad campaigns
    - Focusing on branding to create trust and recognition`,
  },
  {
    title: "SEO vs. PPC: Which One Is Right for Your Business?",
    description:
      "Understand the key differences between SEO and PPC and which one fits your needs best.",
    fullContent: `SEO provides long-term organic growth, while PPC offers instant traffic. 
    - SEO involves optimizing website content for search engines.
    - PPC (like Google Ads) brings quick results but requires ongoing investment.
    - The best strategy is often a combination of both, depending on your budget and goals.`,
  },
  {
    title: "Social Media Growth Strategies: How to Attract More Customers",
    description:
      "Learn the best social media strategies to grow your audience, engage with customers, and drive sales.",
    fullContent: `Social media growth strategies include:
    - Posting consistently valuable content
    - Running contests and giveaways
    - Collaborating with influencers
    - Engaging with your audience via comments and messages
    - Using analytics to improve content strategy`,
  },
  {
    title: "5 Must-Know Trends in Digital Marketing for 2025",
    description:
      "Stay ahead of the competition with the latest digital marketing trends.",
    fullContent: `Trends shaping digital marketing in 2025:
    - AI-driven marketing automation
    - Voice search optimization
    - Video content dominance
    - Personalization in email & social media marketing
    - Influencer collaborations for brand awareness`,
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Open modal with full blog content
  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  // Close modal
  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <section id="blogs" className="blogs">
      <h2>Latest Blogs</h2>
      <p>Stay updated with the latest trends and insights in digital marketing.</p>

      <div className="blogs-container">
        {blogPosts.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="read-more-btn" onClick={() => openModal(blog)}>
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.fullContent}</p>
            <button className="close-btn" onClick={closeModal}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
