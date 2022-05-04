// import styles from './.module.css';

const ImproveSkills = () => {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own receptes",
        "Know mutrition fact",
        "Get cooking tips",
        "Get ranked"
    ]
    return (
        <div className="section  improve-skills">
            <div className="col">
                <img className="img" src="./img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col info">
                <h1 className="title">
                    Improve Your Culinary Skills
                </h1>
                {list.map((i) => (
                    <button key={i} className="improve-btn">{i}</button>
                ))}
                <button className="btn">signup now</button>
            </div>
        </div>
    )
};

export default ImproveSkills;