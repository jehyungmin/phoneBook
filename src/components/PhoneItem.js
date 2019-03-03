import React from 'react';

const PhoneItem = ({children, onRemove}) => {
    return (
        <div>
            <div>{children}</div>
            <div
                onClick={(e)=>{
                    onRemove();
                    e.stopPropagation();
                }}
            >[지우기]</div>
        </div>
    );
};

export default PhoneItem;