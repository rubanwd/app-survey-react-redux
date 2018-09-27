import React from 'react';

const Select = (props) => (
  	<select value={props.value} onChange={props.handleHomeTownChange}>
        <option value="default">Select your hometown</option>
        <option value="London">London</option>
        <option value="Munchester">Munchester</option>
        <option value="Leeds">Leeds</option>
        <option value="Liverpool">Liverpool</option>
    </select>
);

export default Select;