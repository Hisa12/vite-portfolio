import "./Hero.css";
import photo from "../../assets/photo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={photo} alt="photo" width="300px" />
      <h1>
        <span>Hello! I am Hisa.</span>
      </h1>
      <p>
        I am a graduate IT professional passionate about software development,
        particularly in JavaScript, React JS, and Node JS.
      </p>
      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect
        </AnchorLink>
        <div className="hero-work">
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            Check My Work
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
