import CustomImage from "./CustomImage";

const HeroSection = () => {
    
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]

    return (
        <div className="section hero">
            <div className="col">
                <h1 className="title">
                    What Are We About
                </h1>
                <p className="info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quaerat laborum porro, dolorum quidem, mollitia quibusdam commodi aliquam officia dolorem veniam inventore
                </p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                {images.map((i) => (
                    <CustomImage key={i} img={i}/>
                ))
                }
            </div>
        </div>
    )
};

export default HeroSection;