// import styles from './.module.css';
import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className="reciped-card">
                <CustomImage img={recipe.image} />
                <div className="recipe-card-info">
                    <img className="reciped-card-chief" src={recipe.authorImg} />
                    <h3>{recipe.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <button className="card-btn">View recipe</button>
                </div>

            </div>
        </>
    )
};

export default RecipeCard;