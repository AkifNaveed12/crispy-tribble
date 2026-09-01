import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';

const Home = () => {

    const {loading, recipeList} = useContext(GlobalContext);


    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                recipeList && recipeList.length > 0 ?
                
                : null
            }
        </div>
    );
}

export default Home;
