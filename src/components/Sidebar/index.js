import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/DatLogo/logo-sub-title.png'
import LogoSubtitle from '../../assets/images/DatLogo/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faSkype,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/datnguyenptg/"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DatNguyenDN"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCZdO0wV33xzQuApuHZ6T6aw"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="skype:live:.cid.fb5bb79903c50094"
        >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
