import { NavLink } from "react-router-dom";
import './navbar.css';


const Navbar = () => {
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
      <NavLink to='/bblpage' className="nav-link">
      <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="energy"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--energy"
        >
      <g className="fa-group">
      <g id="bolt1" clipPath="url(#clip0_0_1)">
      <path
        fill="currentColor"
        d="M277.374 257.461C280.163 252.348 279.027 245.968 274.637 242.108C270.246 238.248 263.798 237.961 259.049 241.362L151.383 319.179C147.176 322.238 145.268 327.59 146.65 332.582C148.032 337.573 152.398 341.274 157.572 341.756L200.952 345.796L164.572 412.761C161.783 417.874 162.919 424.255 167.31 428.115C171.7 431.974 178.148 432.261 182.898 428.86L290.563 351.043C294.77 347.984 296.679 342.632 295.297 337.641C293.915 332.649 289.584 328.991 284.371 328.505L240.991 324.465L277.374 257.461Z" 
        className="fa-primary"/>
      </g>
      <g id="money 1" clipPath="url(#clip1_0_1)">
      <path  
        fill="currentColor"
        d="M428.875 47.5625H384.125L367.554 22.7053C365.071 18.9645 367.728 14 372.203 14H440.797C445.272 14 447.929 18.9645 445.446 22.7053L428.875 47.5625ZM384.125 58.75H428.875C430.204 59.624 431.707 60.6029 433.42 61.6867C453.243 74.3775 496 101.717 496 159.438C496 177.967 480.967 193 462.438 193H350.562C332.033 193 317 177.967 317 159.438C317 101.717 359.757 74.3775 379.58 61.6867C381.258 60.6029 382.796 59.624 384.125 58.75ZM413.492 89.5156C413.492 85.6699 410.346 82.5234 406.5 82.5234C402.654 82.5234 399.508 85.6699 399.508 89.5156V94.4102C396.851 95.0045 394.194 95.9484 391.746 97.3818C386.887 100.284 382.692 105.353 382.727 112.73C382.762 119.827 386.922 124.302 391.362 126.959C395.208 129.266 399.997 130.735 403.808 131.853L404.402 132.028C408.807 133.357 412.024 134.405 414.191 135.769C415.974 136.888 416.219 137.657 416.254 138.636C416.289 140.384 415.625 141.433 414.191 142.307C412.443 143.39 409.681 144.055 406.71 143.95C402.829 143.81 399.193 142.586 394.438 140.978C393.634 140.698 392.795 140.419 391.921 140.139C388.25 138.915 384.3 140.908 383.076 144.544C381.853 148.18 383.845 152.166 387.481 153.389C388.146 153.599 388.88 153.844 389.614 154.123C392.516 155.137 395.872 156.291 399.473 157.06V162.234C399.473 166.08 402.619 169.227 406.465 169.227C410.311 169.227 413.457 166.08 413.457 162.234V157.41C416.254 156.815 419.051 155.837 421.568 154.263C426.568 151.152 430.343 145.838 430.238 138.531C430.134 131.434 426.148 126.854 421.638 123.987C417.618 121.47 412.583 119.932 408.668 118.743L408.423 118.673C403.948 117.31 400.766 116.331 398.529 115.002C396.711 113.918 396.676 113.289 396.676 112.66C396.676 111.366 397.165 110.387 398.844 109.408C400.731 108.29 403.598 107.625 406.36 107.66C409.716 107.695 413.422 108.429 417.268 109.478C421.009 110.457 424.82 108.255 425.833 104.514C426.847 100.773 424.61 96.9623 420.869 95.9484C418.596 95.3541 416.079 94.7598 413.492 94.3053V89.5156Z"
        className="fa-primary"/>
      </g>
      <path fill="currentColor"
            d="M207.514 126.003C209.158 129.841 210 134.009 210 138.177C210 160.049 192.755 178 171.5 178C150.245 178 133 160.049 133 138.177C133 134.009 133.842 129.8 135.486 126.003L136.248 124.229C142.585 109.62 151.448 96.291 162.436 84.9837L166.006 81.311C167.449 79.8253 169.415 79 171.46 79C173.505 79 175.47 79.8253 176.914 81.311L180.483 84.9837C191.472 96.291 200.375 109.62 206.671 124.229L207.433 126.003H207.514Z"
            className="fa-primary"/>
      </g>
      <g className="fa-group">
      <line className="fa-secondary" x1="268.565" y1="197.826" x2="157.565" y2="279.826" stroke="currentColor" strokeWidth="12"/>
      <line className="fa-secondary" x1="163.571" y1="279.047" x2="4.57074" y2="105.047" stroke="currentColor" strokeWidth="12"/>
      <path
        fill="currentColor"
        d="M521 458L504.227 390.779L454.398 438.915L521 458ZM487.797 414.994L269.315 188.831L260.685 197.169L479.166 423.331L487.797 414.994Z"
        className="fa-secondary"/>
      <path
        fill="currentColor"  
        d="M243.418 105.706L243.139 104.923C229.592 66.2672 207.359 31.5264 178.313 3.50293L176.998 2.2666C175.524 0.824219 173.532 0 171.5 0C169.468 0 167.476 0.824219 166.002 2.2666L164.687 3.50293C135.641 31.5264 113.408 66.2672 99.8609 104.923L99.582 105.706C96.5539 114.278 95 123.386 95 132.534C95 175.847 129.584 211 171.5 211C213.416 211 248 175.847 248 132.534C248 123.386 246.446 114.319 243.418 105.706ZM207.24 126.105C208.873 129.938 209.71 134.1 209.71 138.263C209.71 160.104 192.577 178.031 171.46 178.031C150.343 178.031 133.21 160.104 133.21 138.263C133.21 134.1 134.047 129.897 135.68 126.105L136.438 124.333C142.733 109.745 151.538 96.4336 162.455 85.1418L166.002 81.474C167.436 79.9904 169.388 79.1662 171.42 79.1662C173.452 79.1662 175.405 79.9904 176.839 81.474L180.385 85.1418C191.302 96.4336 200.148 109.745 206.403 124.333L207.16 126.105H207.24Z"
        className="fa-secondary"/>
      </g>
      <defs>
      <clipPath id="clip0_0_1">
      <rect width="197" height="225" fill="white" transform="translate(133 211)"/>
      </clipPath>
      <clipPath id="clip1_0_1">
      <rect width="179" height="179" fill="white" transform="translate(317 14)"/>
      </clipPath>
      </defs>
      </svg>
        <span className="link-text">Energy Data</span>
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