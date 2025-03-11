const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        At <strong>DH Genix Media</strong>, we are on a mission to revolutionize the digital marketing landscape, empowering businesses to scale beyond limits.
        Founded by <strong>Siddharth Mishra</strong> and <strong>Alvina Afsheen</strong>, two dynamic leaders passionate about marketing, branding, and business growth,
        our agency delivers high-impact digital solutions that drive measurable results.
      </p>

      {/* Founders Section */}
      <div className="founders">
        <div className="founder">
          <img src="images/alvina.jpg" alt="Siddharth Mishra" className="founder-img"/>
          <h3>Siddharth Mishra</h3>
          <p>
            A seasoned digital marketing expert with over <strong>12 years of experience</strong>, Siddharth has helped <strong>100+ businesses</strong>
            achieve exponential growth through strategic online marketing, SEO, and advertising. 
            He launched <strong>Digital Homeez</strong>, an India-based marketing company, 5 years ago and expanded business operations to 
            the <strong>US, UK, Dubai, and other global markets</strong>. Now, through DH Genix Media, he is helping brands unlock their full potential in Dubai.
          </p>
        </div>

        <div className="founder">
          <img src="/images/alvina.jpg" alt="Alvina Afsheen" className="founder-img"/>
          <h3>Alvina Afsheen</h3>
          <p>
            With <strong>4 years of expertise</strong> in marketing, branding, designing, and <strong>Google My Business (GMB)</strong>, 
            Alvina stays ahead of market trends, implementing innovative strategies that drive business success. 
            Her deep understanding of SEO and product-based businesses makes her an invaluable force in digital business transformation.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <p className="closing">
        At <strong>DH Genix Media</strong>, we believe in results, not just promises. Whether you’re a startup looking to establish your presence 
        or an established business aiming for massive digital growth, we have the expertise, tools, and passion to make it happen.
      </p>
    </section>
  );
};

export default About;
