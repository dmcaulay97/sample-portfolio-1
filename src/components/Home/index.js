import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'l', 'a', 'n']
    const lastNameArray = ['c', 'A', 'u', 'l', 'a', 'y']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const web = ['w', 'e', 'b']
    const developer = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <span className='first-letter'>D</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br className='mcaulay-break' />
                        <span className='first-letter big-m'>M</span>
                        <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={20} />
                        <br />
                        <div className="web-developer">
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} />
                        </div>
                        <div className="web-developer-break">
                            <AnimatedLetters letterClass={letterClass} strArray={web} idx={26} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={developer} idx={31} />
                        </div>
                    </h1>
                    <h2>Frontend Developer / Javascript Expert</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type='cube-transition' />
        </>
    );
}

export default Home