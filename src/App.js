import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { recieveResults, addPerson } from './actions'
import FormSurvey from './components/FormSurvey'
import {ResultsSurveyTable} from './components/ResultsSurveyTable'

class App extends Component {

  componentDidMount() {
    this.props.getResults();
  }

  render() {

    const { error, errorMessage, errorMessageValidateData, loading, persons  } = this.props.data;

    return (
      <div className="survey-app">
        <FormSurvey onPersonAdd={this.props.addPerson}
                    errorMessage={errorMessage} 
                    errorMessageValidateData={errorMessageValidateData} 
                     />
        <ResultsSurveyTable persons={persons} 
                            loading={loading}
                            error={error}
                             />
      </div>
    );
  }
}
export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    getResults: () => {
      dispatch(recieveResults());
    },
    addPerson: (data) => {
      dispatch(addPerson(data));
    }
  })
)(App);