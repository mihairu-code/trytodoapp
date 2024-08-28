import React from 'react';
import PropTypes from 'prop-types';

const ExtraComponent = ({ allSelected = false, selectAllToggle }) => {
  return (
    <button className="select-all-tab" onClick={selectAllToggle}>
      {allSelected ? 'Unselect All' : 'Select All'}
    </button>
  );
};

ExtraComponent.propTypes = {
  allSelected: PropTypes.bool,
  selectAllToggle: PropTypes.func,
};

export default ExtraComponent;
