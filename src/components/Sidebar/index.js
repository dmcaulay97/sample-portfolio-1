import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <>
        <div className='mobile-nav-bar'>
            <Link className='logo' to='/'>
                {/* <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" /> */}
                <div className='logo-text-1'>
                    DM
                </div>
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faPaperPlane} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <div className='external-links'>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dylan-mcaulay-8a4693159/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://github.com/dmcaulay97'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/watch?v=Bfc5f7yUqY4'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </div>

        </div>

        <div className='nav-bar'>
            <Link className='logo' to='/'>
                {/* <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" /> */}
                <div className='logo-text-1'>
                    DM
                </div>
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faPaperPlane} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dylan-mcaulay-8a4693159/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/dmcaulay97'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.youtube.com/watch?v=Bfc5f7yUqY4'>
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    </>
)


export default Sidebar