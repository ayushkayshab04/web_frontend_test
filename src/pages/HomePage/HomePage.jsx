import React, { useRef, useState } from 'react';
import Classes from './HomePage.module.css';
import FeatureCard from './Components/FeatureCard/FeatureCard';
import { CarouselData, features, icons } from '../../Utils/data';


const HomePage = () => {
  
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToItem = (index) => {
    const container = carouselRef.current;
    const item = container.children[index];
    if (item) {
      const containerWidth = container.clientWidth;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.clientWidth;
      const scrollLeft = itemLeft - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) scrollToItem(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < CarouselData.length - 1) scrollToItem(currentIndex + 1);
  };


  return (
    <div className={Classes.homeWrapper}>
      <section className={Classes.heroSection}>
        <div className={Classes.heroOverlay}>
          <h1>
            We offer you information in a new form: <br />
            <span>guided experience maps</span>
          </h1>
          <p className={Classes.subHeading}>
            With all essential features in-built, they go far beyond just <br />
            <span>telling you what you can do. They help you do it.</span>
          </p>

          <div className={Classes.cardGrid}>
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
            <div className={Classes.ctaButtonParent}>
          <button className={Classes.ctaButton}>Join Us Now</button>
            </div>
        </div>
      </section>

      <section className={Classes.phoneSection}>
        <h1 className={Classes.phoneSectionTitle}>
          Check out what you’re getting,<br />
          <span>and why it's worth your time</span> 
        </h1>
         {/* Arrow Buttons */}
          <button onClick={handlePrev} className={Classes.leftButton} disabled={currentIndex === 0}>
            {"<"}
          </button>
          <button onClick={handleNext} className={Classes.rightButton} disabled={currentIndex === CarouselData.length - 1}>
            {">"}
          </button>

        <div className={Classes.phoneContainer}>
          <div className={Classes.phoneText} ref={carouselRef}>
            {CarouselData.map((item,index)=>{
              return( 
                <div className={Classes.carouselComponent}>
                <img className={Classes.CarouselPhoto} src={`./${item.icon}`} />
                <div className={Classes.carouselText}>
                  <div className={Classes.carouselTextHeader}>
                      <div className={Classes.carouselTextHeaderIndex}>
                        {index+1}
                      </div>
                      <h1 className={Classes.carouselTextHeaderTitle}>
                        {item.title}
                      </h1>
                  </div>
                  <p className={Classes.carouselTextHeaderContent}>
                    {item.description}
                  </p>
                </div>
                </div>
             )})} 
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={Classes.footer}>
        <div className={Classes.footerLinks}>
          <div className={Classes.links}>
          <a className={Classes.footerLinksText} href="#">Home</a>
          <a className={Classes.footerLinksText} href="#">For Contributors</a>
          <a className={Classes.footerLinksText} href="#">Blog</a>
          <a className={Classes.footerLinksText} href="#">The Idea</a>
          <a className={Classes.footerLinksText} href="#">For Researchers</a>
          <a className={Classes.footerLinksText} href="#">Contact us</a>
          </div>
          <div>
        <p className={Classes.footerLinksTextBottom}>© 2025. Goallies is the part of Omnica Pty Ltd. All rights reserved.</p>
        <p className={Classes.footerLinksTextBottom}>
             <span>Privacy Policy</span> and <span>Terms & Conditions</span>
        </p>
          </div>
        </div>
        <div className={Classes.socials}>
         <p>
          Join us on social media
         </p>
         <div className={Classes.iconConatiner}>
            {icons.map((item,index)=>{
              return<img key={index} src={`./${item.name}`} />
            })}
         </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
