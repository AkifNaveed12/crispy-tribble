import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import RecipeItem from '../../recipe-list/RecipeItem';

const Home = () => {

    const {loading, recipeList} = useContext(GlobalContext);

    if(loading){
        return <div>Loading...Please wait!</div>
    }

    return (
        <>
            {
                recipeList && recipeList.length > 0 ?
                <div className='py-8 max-w-1400px mx-auto flex flex-wrap justify-center gap-10'>
                    {
                        recipeList.map((item) => 
                            <RecipeItem item={item} key={item.id}/>
                        )
                    }
                </div>
                :
                <section 
                    className='relative min-h-[calc(100vh-180px)] flex items-center overflow-hidden bg-cover bg-center'
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85')"
                    }}
                >

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-linear-to-r from-white/40 via-white/20 to-white/10 '></div>

                    {/* Content */}
                    <div className='relative z-10 max-w-1400px mx-auto w-full px-6 lg:px-12'>
                        
                        <div className='max-w-2xl'>

                            <span className='text-sm font-extrabold tracking-[0.3em] uppercase text-orange-700'>
                                Discover · Cook · Enjoy
                            </span>

                            <h1 className='mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900'>
                                Good food starts with a{' '}
                                <span className='text-orange-700'>
                                    great recipe.
                                </span>
                            </h1>

                            <p className='mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-orange-700'>
                                Explore recipes worth making, discover new flavors,
                                and find something delicious for every craving.
                            </p>

                            <div className='mt-8 flex items-center gap-4'>
                                <span className='h-px w-12 bg-orange-700'></span>

                                <span className='text-sm font-medium tracking-wide text-gray-600'>
                                    Search above to find your next favorite dish
                                </span>
                            </div>

                        </div>

                    </div>
                </section>
            }
        </>
    );
}

export default Home;