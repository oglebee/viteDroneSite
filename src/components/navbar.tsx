import { NavLink } from "react-router-dom";
import './navbar.css';
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar instanceof HTMLElement) {
        navbar.style.height = window.innerHeight + 'px';
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function to set initial size
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (          
  <nav className="navbar">
  <ul className="navbar-nav">
    <li className="logo">
      <a href="/" className="nav-link">
        <span className="link-text logo-text">Oglebee</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="angle-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
        >
          <g className="fa-group">
            <path
              fill="currentColor"
              d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
              className="fa-secondary"
            ></path>
            <path
              fill="currentColor"
              d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
              className="fa-primary"
            ></path>
          </g>
        </svg>
      </a>
    </li>
    <li className="nav-item">
      <NavLink to='/catpage' className="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="cat"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--fa fa-cat fa-w-16 fa-9x"
        >
          <g className="fa-group">
            <path
              fill="currentColor"
              d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
              className="fa-secondary"
            ></path>
            <path
              fill="currentColor"
              d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
              className="fa-primary"
            ></path>
          </g>
        </svg>
        <span className="link-text">Cat Pics</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/interestspage' className="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="space-shuttle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
        >
          <g className="fa-group">
            <path
              fill="currentColor"
              d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
              className="fa-secondary"
            ></path>
            <path
              fill="currentColor"
              d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
              className="fa-primary"
            ></path>
          </g>
        </svg>
        <span className="link-text">Interests</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/curvypage' className="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="space-shuttle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--curvy"
        >
        <g className="fa-group">
          <rect id="Rectangle 1" width="512" height="512" fill="currentColor" className="fa-primary"/>
        </g>
        <g className="fa-group">
          <path id="Vector 1" d="M280 126C211 117 173 229 0 157V371C15 335.667 54 268.6 90 283C135 301 130 479 196 461C262 443 306 352 356 371C406 390 408 456 443 451C471 447 500.667 430.667 512 423V175C506 183 482.2 202.4 435 216C376 233 349 135 280 126Z" fill="currentColor" stroke="black" className="fa-secondary"/>
        </g>
        </svg>
        <span className="link-text">Curvy</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/aboutpage' className="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="id"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="svg-inline--fa fa-id fa-w-16 fa-9x"
        >
          <g className="fa-group">
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              className="fa-secondary"
            ></path>
          </g>
        </svg>
        <span className="link-text">Contact Us</span>
      </NavLink>
    </li>
  </ul>
</nav>
);
};

export default Navbar;