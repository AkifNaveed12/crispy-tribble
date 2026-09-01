import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const Details = () => {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

useEffect(() => {
    async function getRecipeDetails() {
        const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    );
    const data = await response.json();

    console.log(data);
    console.log(data?.data?.recipe?.image_url);
    
    if (data?.data) {
        setRecipeDetailsData(data?.data);
    }
    }
    getRecipeDetails();
}, [id]);


    console.log("STATE:", recipeDetailsData);
    console.log("IMAGE:", recipeDetailsData?.recipe?.image_url);

return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
            <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full group-hover:scale-105 duration-300"
        />
        </div>
    </div>
    </div>
);
};

export default Details;
