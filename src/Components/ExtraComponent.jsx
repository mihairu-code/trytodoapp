import React from 'react';
import App from "./App";

const ExtraComponent = ({ allSelected, selectAllToggle }) => {
    return (
        <button className="select-all-tab" onClick={selectAllToggle}>
            {allSelected ? "Unselect All" : "Select All"}
        </button>
    )
};



export default ExtraComponent;