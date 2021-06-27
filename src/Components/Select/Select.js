import React from 'react';
import DropDown from '../DropDown/DropDown';


const Select = () => {
   
    return (
        <div>
            <h1 className="text-center font-family mb-5 mt-5 review" style={{ fontWeight: '600', color: '#65555D' }}>WHAT<span style={{ color: '#C94185' }}> Their</span> Product</h1>
            <div className="review-container" style={{ paddingTop: '8%' }}>

                <p></p>
                <div>
                   <DropDown></DropDown>
                </div>
            </div>
        </div>
    );
};

export default Select;