// import React from 'react';

// const PhoneList = ({phoneList, handleClick, handleRemove}) => {

//     const phones = phoneList.map(
//         phoneList => (
            
//         )
//     )
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PhoneList;

import React from 'react';
import PhoneItem from './PhoneItem';

const PhoneList = ({ phoneList, onRemove}) => {
    const phonelist = phoneList.map(
        phonebook => (
            <PhoneItem 
                key={phonebook.get('id')}
                onRemove={() => onRemove(phonebook.get('id'))}>
                {phonebook.get('name')} {phonebook.get('phone')}
            </PhoneItem>
        )
    )
    return (
        <div>
            {phonelist}
        </div>
    );
};

export default PhoneList;