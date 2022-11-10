import "./index.scss"
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Card from '../Card'
import img1 from '../../assets/images/project-img1.png'
import img2 from '../../assets/images/project-img2.png'
import img3 from '../../assets/images/project-img3.png'
import img4 from '../../assets/images/project-img4.png'

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone projects-text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
                            idx={15} />
                    </h1>
                </div>
                <div className="projects-container">
                    <Card title="Tic-Tac-Toe" img={img1} height="159" width="112" link='https://dmcaulay97.github.io/better-tic-tac-toe/' />
                    <Card title='Movie Search' img={img2} height="100" width='100' link='https://dmcaulay97.github.io/movie-search/' />
                    <Card title='Pace Calculator' img={img3} height="100" width='100' link='https://dmcaulay97.github.io/Pace-calculator/' />
                    <Card title='Mandala' img={img4} height="100" width='100' link='https://dmcaulay97.github.io/mandala/' />
                </div>
            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Projects