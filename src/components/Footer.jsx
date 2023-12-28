import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/batmah2">
        <p>
          <span>▷</span> Design par Michael Yeates &copy; build et traduction par Mahmoud Ismail {currentYear}
        </p>
      </a>      
    </footer>
  );
};

export default Footer;
