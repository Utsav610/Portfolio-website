export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Utsav Jogani</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React Native </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            <br />
            Crafting seamless cross-platform mobile experiences. From intuitive
            UIs to robust backend solutions, I thrive on innovation.
            <br /> Let's build something extraordinary together! 🌟
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/upgrade.png" alt="Hero Section" />
        {/* <img src="./img/remove_BG.png" alt="Hero Section"/> */}
      </div>
    </section>
  );
}
