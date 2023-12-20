import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/Mah.jpeg";
import SocialIcons from "./SocialIcons";

/**
 * Represents the hero section of the page.
 *
 * @component
 * @param {string} name - The name to be displayed in the hero section.
 */

const Hero = ({ name }) => {
  // Styles for various elements
  const styles = {
    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "var(--text-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };
  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        {/* Animated name */}
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>
        {/* Animated description */}
        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Typewriter effect for dynamic text animation without a cursor */}
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Développeur Front End").start();
            }}
          />
        </motion.div>
        <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5, type: "spring" }}>
          <p><br/><br/>Intégrateur web passionné et curieux, je mets mes compétences au service de vos projets <br/><br/>Passionné d'informatique  j'ai suivi une formation Intégrateur web de 9 mois chez OpenClassrooms. Cette formation m'a permis d'acquérir les compétences techniques nécessaires pour concevoir et réaliser des sites web performants et optimisés.<br/><br/>Au cours de ma formation, j'ai appris à maîtriser les technologies web les plus récentes, notamment React, HTML, CSS et JavaScript. J'ai également développé mes compétences en optimisation du référencement, en debuggage, en tests et en planification.<br/><br/>

              Je suis aujourd'hui un intégrateur web qualifié et expérimenté, prêt à relever tous les challenges. Je suis toujours à la recherche de nouvelles technologies et de nouvelles façons de faire.<br/><br/>

              Si vous avez un projet web, n'hésitez pas à me contacter. Je serai ravi de vous accompagner dans sa réalisation.</p>
        </motion.div>
      </div>
      {/* Animated landing image */}
      {/* Displaying social icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;
