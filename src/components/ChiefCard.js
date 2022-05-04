// import styles from './chiefs.module.css';


const ChiefsCard = ({ chief }) => {
    return (
        <div className="chief-card">
            <div className="chief-img">
                <img className="chief-foto" src={chief.image} alt={chief.name} />
            </div>
            <div className="chief-card-info">
                <h3 className="chief-card-name">
                    {chief.name}
                </h3>
                <p className="chief-card-count">
                    Reciptes: <span>{chief.count}</span>
                </p>
                <p className="chief-card-cuisine">
                    Cuisine: <span>{chief.cuisine}</span>
                </p>
                <ul className="chief-social">
                    <p className="chief-social-item">
                        <a href="#">
                            <img src="./img/social/facebook.png" alt="" />
                        </a>
                    </p>
                    <p className="chief-social-item">
                        <a href="#">
                            <img src="./img/social/instagram.png" alt="" />
                        </a>
                    </p>
                    <p className="chief-social-item">
                        <a href="#">
                            <img src="./img/social/youtube.png" alt="" />
                        </a>
                    </p>
                </ul>
            </div>
        </div>
    )
};

export default ChiefsCard;