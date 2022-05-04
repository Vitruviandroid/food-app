// import styles from './.module.css';

import ChiefsCard from "./ChiefCard";

const ChiefsSection = () => {
    let chiefs = [
        {
            image: "./img/top-chiefs/img_1.jpg",
            name: "Juan Carlos",
            count: "10",
            cuisine: "Mexiacan",
        },
        {
            image: "./img/top-chiefs/img_2.jpg",
            name: "John Doe",
            count: "05",
            cuisine: "Japanese",
        },
        {
            image: "./img/top-chiefs/img_3.jpg",
            name: "Erich Maria",
            count: "13",
            cuisine: "Italian",
        },
        {
            image: "./img/top-chiefs/img_4.jpg",
            name: "Chris Brown",
            count: "08",
            cuisine: "American",
        },
        {
            image: "./img/top-chiefs/img_5.jpg",
            name: "Blake Lively",
            count: "09",
            cuisine: "French",
        },
        {
            image: "./img/top-chiefs/img_6.jpg",
            name: "Ben Affleck",
            count: "04",
            cuisine: "Indian",
        },
    ]

    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map((i) => (
                    <ChiefsCard key={i.name} chief={i} />
                ))
                }
            </div>
        </div>
    )
};

export default ChiefsSection;