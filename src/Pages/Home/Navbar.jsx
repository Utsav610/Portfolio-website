import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../../redux/action";

function Navbar() {

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const [navActive, setNavActive] = useState(false);
  

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  console.log('mode',isDarkMode);

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/utsav_jogani1.png" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
          {/* <li>
            <div>
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
                <i className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"}`}></i>
                <span
                  className={`ball ${isDarkMode ? "dark" : "light"}`}
                ></span>
              </label>
            </div>
          </li> */}
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
