import './../assets/textImage.css';

function TextImage(props) {

    const reverse = {
        flexDirection: props.reverse ? 'row-reverse' : ''
    }

    const imageMargin = {
        marginLeft: props.reverse ? '0' : '10%',
        marginRight: props.reverse ? '10%' : '0',
    }

    return (
        <div className="section text-image" style={reverse}>

            <div className="text-col">
                <h2 className="title">{props.title}</h2>
                <p className="text" dangerouslySetInnerHTML={{__html: props.text}}></p>
                { props.link ? 
                    <a href={props.link} target="_blank" rel="noreferrer" className="button">Visit {props.title}</a>
                : null }
            </div>

            <div className="image-col" style={imageMargin}>
                <img className="image" src={props.image} alt=""/>
            </div>

        </div>
    )
}

export default TextImage;
