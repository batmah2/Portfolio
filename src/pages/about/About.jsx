import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CVimage from "../../images/CVMah.jpg"


const About = () => {
    // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    return(
        <>
      {/* Main About Page */}
      <main className="about container">
        {/* Display the page header */}
        <PageHeader title="À propos de moi" description="Jetez un oeil à mon parcours !" />

        <div className="row">
            <motion.p 
            className="pageParagraph"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring" }}>Intégrateur web passionné, formé chez OpenClassrooms, maîtrisant React, HTML, CSS, et JavaScript, avec des compétences en référencement,
                 résolution de bugs, tests fonctionnels, et planification de développement, prêt à collaborer sur vos projets web.</motion.p>
        </div>
        <div className="aboutImg">
            <motion.img 
             className="CvImage"
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
             src={CVimage} alt="curriculum vitae" />
        </div>
      </main>
      <Footer />
    </>
    )
}

export default About;