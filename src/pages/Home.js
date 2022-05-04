// import styles from './Home.module.css';
import ChiefsSection from "../components/ChiefsSection";
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </>
    )
};

export default Home;