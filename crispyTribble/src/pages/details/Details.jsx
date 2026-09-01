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
    <div className="flex flex-col gap-3">
        <span className='text-sm text-cyan-700 font-medium'>{recipeDetailsData?.recipe?.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{recipeDetailsData?.recipe?.title}</h3>

        <div>
            <button
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block bg-black text-white"
            >Save as favorites</button>
            <br /> 
            <br />
            <span className="text-2xl font-extrabold text-black mt-4 mb-4">Ingredients:</span>
            <ul className="flex flex-col gap-3">
                {
                    recipeDetailsData?.recipe?.ingredients.map((ingredient) => <li key={ingredient.id}>
                        <span className="text-2xl font-medium text-black p-2">
                            {ingredient.quantity} {ingredient.unit}
                            </span>
                        <span className="text-2xl font-light text-black">
                            {ingredient.description}
                            </span>
                    </li> )
                }
            </ul>
        </div>
    </div>
    </div>
);
};

export default Details;
