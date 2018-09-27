import * as api from '../api/api'


export const FETCH_PERSONS_BEGIN   = 'FETCH_PERSONS_BEGIN'
export const FETCH_PERSONS_SUCCESS = 'FETCH_PERSONS_SUCCESS'
export const FETCH_PERSONS_FAILURE = 'FETCH_PERSONS_FAILURE'

export const ADD_PERSON = 'ADD_PERSON'
export const ADD_PERSON_FAILURE= 'ADD_PERSON_FAILURE'

const fetchResultsBegin = () => ({
  type: FETCH_PERSONS_BEGIN
});

const fetchResultsSuccess = results => ({
  type: FETCH_PERSONS_SUCCESS,
  payload: results
});

const fetchResultsError = error => ({
  type: FETCH_PERSONS_FAILURE,
  payload: { error }
});

const addPersonData = data => ({
  type:ADD_PERSON,
  payload: data
});

const addPersonDataError = erorrdata => ({
  type:ADD_PERSON_FAILURE,
  payload: erorrdata
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}

export function recieveResults() {
  return dispatch => {
    dispatch(fetchResultsBegin());
    api.surveyApi('GET')
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchResultsSuccess(res));
      })
      .catch(error => dispatch(fetchResultsError(error)));
  };
}

export function addPerson(data) {
  return (dispatch, getState) => {
    api.surveyApi('POST', data)
      .then(res => res.json())
      .then(res => {
        console.log("handleErrors", res);
        if(res.id) {
          dispatch(addPersonData(res));
        }
          dispatch(addPersonDataError(res));
      })
      .catch((res) => dispatch(fetchResultsError(res)));
  };
}