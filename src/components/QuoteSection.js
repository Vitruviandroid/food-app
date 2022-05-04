import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const QouteSection = () => {
    return (
        <div className="section quote">
            <p className="qoute-text">
                <FontAwesomeIcon icon={faQuoteLeft} /> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est laudantium neque magnam soluta commodi. Praesentium provident velit mollitia in, architecto odio modi dolor necessitatibus placeat ut! Deserunt, repellendus aliquid.
                </p>
            <p className="qoute-auther">-Anthony Bourdain</p>
        </div>
    )
};

export default QouteSection;