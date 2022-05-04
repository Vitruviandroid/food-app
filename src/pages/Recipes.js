// import styles from './Recipes.module.css';

import { useState } from "react";
import ReactPaginate from 'react-paginate';
// import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {

    const [query, setQuery] = useState('');

    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "PEPPER STEAK",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Comforting Shepherd's Pie",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "SUGAR PIE",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
        },
        {
            title: "CITRUS BEET SALAD",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "GINGER ALE BAKED HAM",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "SPINACH & ARTICHOKE MASHED POTATOES",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "GRILLED CHICKEN BANH MI",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "PEPPER STEAK",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Comforting Shepherd's Pie",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "SUGAR PIE",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
        },
        {
            title: "CITRUS BEET SALAD",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "GINGER ALE BAKED HAM",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "SPINACH & ARTICHOKE MASHED POTATOES",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "GRILLED CHICKEN BANH MI",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "PEPPER STEAK",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Comforting Shepherd's Pie",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "SUGAR PIE",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
        },
        {
            title: "CITRUS BEET SALAD",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "GINGER ALE BAKED HAM",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "SPINACH & ARTICHOKE MASHED POTATOES",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "GRILLED CHICKEN BANH MI",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
    ]
    // .sort(() => Math.random() - 0.8)


    return (
        <>
            {/* <PreviousSearches recipes={recipes} /> */}

            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)} />
            <div className="recipes-container">

                {/* <RecipeCard /> */}
                {
                    recipes
                        .filter((recipes) => recipes.title.includes(query))
                        .map((recipe, index) => (
                            <RecipeCard key={index} recipe={recipe} />
                        ))}
            </div>
        </>
    )
};

export default Recipes;