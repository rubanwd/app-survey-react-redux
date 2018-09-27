import React from 'react'
import PropTypes from 'prop-types'
import ResultSurveyRow from './ResultSurveyRow'
import loader from '../img/throbber_13.gif'

export const ResultsSurveyTable = props => {

    const { error, loading, persons  } = props

    const rowPerson = persons.map((person) =>
      <ResultSurveyRow
          person={person}
          key={person.id} />
    )

    if (error) {
      return (
          <div>
            <h3>Error! {error.message}</h3>
          </div>
        )
    }

    if (loading) {
      return <h3 className="loader"><img src={loader} width="100" height="100" alt="loading..." /></h3>;
    }

    return (
      <div className="list-results">
        <h2>Pool Results:</h2>
        <ul>{rowPerson}</ul>
      </div>
    )
}

ResultsSurveyTable.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  persons: PropTypes.array.isRequired
}