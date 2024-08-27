import React from 'react';
import PropTypes from 'prop-types'

const TaskFilter = ({filter = "All", onFilterChange}) => {
    return (
        <ul className="filters">
            <li>
                <button className={filter === "All" ? "selected" : ""}
                        onClick={() => onFilterChange("All")}>
                    All
                </button>
            </li>
            <li>
                <button className={filter === "Active" ? "selected" : ""}
                        onClick={() =>onFilterChange("Active")}>
                    Active
                </button>
            </li>
            <li>
                <button className={filter === "Completed" ? "selected" : ""}
                        onClick={() => onFilterChange("Completed")}>
                    Completed
                </button>
            </li>
        </ul>
    );
};

TaskFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,

}

export default TaskFilter;
