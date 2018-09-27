import React from 'react';

function ResultSurveyRow (props) {
    const person = props.person;
    const favoriteTools = person.favorite_tools.map((item) => item).join(', ')
    return (
      <li>
        <p><span>Name:</span> {person.name}</p>
        <p><span>Home Town:</span> {person.home_town}</p>
        <p><span>Favorite Tools:</span> { favoriteTools }</p>
      </li>
    );
}
export default ResultSurveyRow;