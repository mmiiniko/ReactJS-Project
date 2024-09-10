import React from 'react';

const SearchBox = ({searchChange}) => { 
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='Search User' 
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;

{/* Line3 searchChange is a props that gets called apps.js  */}
{/* Line10 everytime the event (onChange) triggers, it returns the props (searchChange) in the function */}