import React, { Component } from 'react';
import '../CustomCss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PhoneFrom = ({ name, phone, handleChange, handleInsert}) => {
    return (
        <div>
            <input name="name" placeholder="이름" value={name} onChange={handleChange}/>
            <input name="phone" placeholder="전화번호" value={phone} onChange={handleChange} />
            <button onClick={handleInsert}>클릭</button>
        </div>
    )

}

export default PhoneFrom;