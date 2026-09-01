import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import RecipeItem from '../../recipe-list/RecipeItem';

const Home = () => {

    const {loading, recipeList} = useContext(GlobalContext);

    if(loading){
        return <div>Loading...Please wait!</div>
    }
    

    return (
        <div className='py-8 max-w-[1400px] mx-auto flex flex-wrap justify-center gap-10'>
            {
                recipeList && recipeList.length > 0 ?
                recipeList.map((item) => <RecipeItem item={item}  key={item.id}/>)
                : <div>
                    <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show! Please Search Something</p>
                </div>
            }
        </div>
    );
}

export default Home;
