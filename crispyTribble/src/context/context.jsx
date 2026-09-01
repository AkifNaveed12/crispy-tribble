import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const res = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`,
        );
        const data = await res.json();

        if (data?.data?.recipes) {
            setRecipeList(data?.data?.recipes);
            setLoading(false);
            setSearchParam("");
    }
    } catch (e) {
        console.log(e);
        setLoading(false);
        setSearchParam("");
    }
}

function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex((item) => item.id === getCurrentItem.id);

    if(index === -1 ){
        cpyFavoritesList.push(getCurrentItem);
    }
    else{
        setFavoritesList(cpyFavoritesList);
    }

    setFavoritesList(cpyFavoritesList);
}

console.log(favoritesList, 'favoritesList');

return (
    <GlobalContext.Provider
        value={{
            searchParam,
            setSearchParam,
            handleSubmit,
            loading,
            recipeList,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavorite,
            favoritesList
    }}
    >
        {children}
    </GlobalContext.Provider>
);
}
