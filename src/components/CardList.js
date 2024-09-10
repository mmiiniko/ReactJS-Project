import React from 'react';
import Card from './Card';

const CardList = ({infos}) => {
return (
    <div>
        {
            infos.map((user, i) => { {/* "user" parameter calls the user on the array, "i" calls the index in array mapping */}
                return (
                    <Card 
                        key={i} 
                        id={infos[i].name} 
                        name={infos[i].name} 
                        email={infos[i].email}
                    />
                );
            })
        } 
    </div>
);
}

export default CardList;