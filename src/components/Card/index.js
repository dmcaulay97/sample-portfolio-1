import './index.scss'

const Card = (props) => {

    const style1 = { backgroundImage: `url(${props.img})` }
    const style2 = { backgroundSize: `${props.height}% ${props.width}%` }

    const link = (url) => {
        window.open(url)
    }

    return (
        <div className='card-container'>
            <div className="card" style={{ ...style1, ...style2 }}>
                <div className='overlay' onClick={() => link(props.link)}>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card