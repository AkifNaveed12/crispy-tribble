import React, { useContext } from 'react';
import RecipeItem from '../../recipe-list/RecipeItem';
import { GlobalContext } from '../../context/context';

const Favorites = () => {
    const { favoritesList, loading } = useContext(GlobalContext);

    if(loading){
        return <div>Loading...Please wait!</div>
    }
    

    return (
        <div className='py-8 max-w-[1400px] mx-auto flex flex-wrap justify-center gap-10'>
            {
                favoritesList && favoritesList.length > 0 ?
                favoritesList.map((item) => <RecipeItem item={item}  key={item.id}/>)
                : <div>
                    <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing is added in favorites!</p>
                </div>
            }
        </div>
    );
}

export default Favorites;
