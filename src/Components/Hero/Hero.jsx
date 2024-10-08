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
        particularly in JavaScript, React JS, Node JS.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
