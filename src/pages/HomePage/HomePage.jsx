import React from 'react';
import Classes from './HomePage.module.css';
import FeatureCard from './Components/FeatureCard/FeatureCard';

const HomePage = () => {
  const features = [
    {
      title: 'Clear action steps',
      description: 'Visual and voice instructions for everything you need to do',
      icon:"Vector.png"
    },
    {
      title: 'Support & control',
      description: 'Features to connect, seek advice and stay accountable',
      icon:"users.png"
    },
    {
      title: 'Time & tasks management',
      description: 'Features to control every step & stay organised effortlessly',
      icon:"chronometer.png"
    },
    {
      title: 'Progress tracking',
      description: 'Features to see how far you’ve come and what really works for you',
      icon:"graph-up.png"
    },
    {
      title: 'Continuous motivation',
      description: 'Engaging features for you to stay positive and on the right track',
      icon:"headset-help.png"
    },
  ];

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
        <div className={Classes.phoneContainer}>
          <div className={Classes.phoneText}>
            <h2><span>1</span> Your Life. Your Way.</h2>
            <p>
              Meet your new best friend – Goalies AQ (Action Guide) – a free virtual assistant designed by you...
              Take control of your journey and achieve success on your own terms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={Classes.footer}>
        <div className={Classes.footerLinks}>
          <div>
          <a className={Classes.footerLinksText} href="#">Home</a>
          <a className={Classes.footerLinksText} href="#">For Contributors</a>
          <a className={Classes.footerLinksText} href="#">Blog</a>
          <a className={Classes.footerLinksText} href="#">The Idea</a>
          <a className={Classes.footerLinksText} href="#">For Researchers</a>
          <a className={Classes.footerLinksText} href="#">Contact us</a>
          </div>
          <div>
        <p>© 2025. Goallies is the part of Omnica Pty Ltd. All rights reserved.</p>
          </div>
        </div>
        <div className={Classes.socials}>
         <p>
          Join us on social media
         </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
