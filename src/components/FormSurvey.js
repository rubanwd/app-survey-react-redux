import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from './form-components/Checkbox'
import Input from './form-components/Input'
import Select from './form-components/Select'

const checkboxes = [
  {
    name: 'Atom',
    key: 'atom',
    label: 'Atom',
  },
  {
    name: 'Webstorm',
    key: 'webstorm',
    label: 'Webstorm',
  },
  {
    name: 'Sketch',
    key: 'sketch',
    label: 'Sketch',
  },
  {
    name: 'Photoshop',
    key: 'photoshop',
    label: 'Photoshop',
  },
];

class FormSurvey extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHomeTownChange = this.handleHomeTownChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);

    this.favToolsToArray = this.favToolsToArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      personName: '',
      personHomeTown: 'default',
      favoriteTools: new Map()
    };
  }

  handleNameChange(event) {
    this.setState({
      personName: event.target.value,
    });
  }

  handleHomeTownChange(event) {
    this.setState({
      personHomeTown: event.target.value,
    });
  }

  handleFavoriteChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ favoriteTools: prevState.favoriteTools.set(item, isChecked)}))
  }

  favToolsToArray() {
    const favArray = []; 
    this.state.favoriteTools.forEach( (value, key) => {
      if(value) {
        favArray.push(key)
      }
    });
    return favArray;
  }

  handleSubmit(event) {
    event.preventDefault();
    const pushData = {
      name: this.state.personName,
      home_town: this.state.personHomeTown,
      favorite_tools: this.favToolsToArray()
    }
    this.props.onPersonAdd(pushData);
    this.setState({
      personName: '',
      personHomeTown: '',
      favoriteTools: new Map()
    });
  }

  render() {

    const { errorMessage, errorMessageValidateData } = this.props;

    let showMessageError
    let showMessageValidate = [];

    if(errorMessage) {
      showMessageError = <h3> {errorMessage} </h3>
      for (var key in errorMessageValidateData) {
        showMessageValidate.push(
          <h4 key={key}>{errorMessageValidateData[key]}</h4>
          )
      }
    }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Survey App</h1>
        <div>
          <Input personName={this.state.personName} handleNameChange={this.handleNameChange} ></Input>
        </div>

        <div>

          <Select value={this.state.personHomeTown} handleHomeTownChange={this.handleHomeTownChange}></Select>

        </div>

        <div>
          <h4>Pick your favorite tools</h4>
          <div>
                  {
                    checkboxes.map(item => (
                      <label key={item.key} className="checkbox-label">
                        <Checkbox name={item.name} checked={this.state.favoriteTools.get(item.name)} onChange={this.handleFavoriteChange} />
                        {item.name}
                      </label>
                    ))
                  }
          </div>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <div className="error-validate">
          {showMessageError}
          {showMessageValidate}
        </div>
        </div>
    );
  }
}
FormSurvey.propTypes = {
  onPersonAdd: PropTypes.func.isRequired,
}
export default FormSurvey;