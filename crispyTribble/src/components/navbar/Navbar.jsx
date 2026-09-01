import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/context';

const Navbar = () => {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
    console.log(searchParam);


    return (
        <div className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
            <h2 className='text-2xl font-semibold'>
                <NavLink 
                    to={'/'} 
                    className='text-lack hover:text-gray-700 duration-300'>
                        FoodRecipe 
                    </NavLink>
            </h2>

            {/* Navbar search bar input */}
            <form className="lg:w-96"
            onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='search'
                    onChange={(event) => setSearchParam(event.target.value)}
                    placeholder="Enter Items..."
                    className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-200 focus:shadow-red-300 focus:ring-2 focus:ring-red-200'
                    />
            </form>

            {/* NavLinks */}
            <ul className='flex gap-5'>
                <li>
                    <NavLink 
                    to={'/'} 
                    className='text-black hover:text-gray-700 duration-300'>
                        Home 
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to={'/favorites'} 
                    className='text-lack hover:text-gray-700 duration-300'>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
