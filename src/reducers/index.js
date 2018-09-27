import {
  FETCH_PERSONS_BEGIN,
  FETCH_PERSONS_SUCCESS,
  FETCH_PERSONS_FAILURE,
  ADD_PERSON,
  ADD_PERSON_FAILURE
} from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  errorMessageValidateData: {},
  loading: true,
  persons: []
};

export default function surveyReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PERSONS_BEGIN:
      return {
        ...state,
        error: null,
        loading: true
      }
    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        persons: action.payload.reverse()
      }
    case FETCH_PERSONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        persons: []
      }
    case ADD_PERSON:
      return {
          ...state,
          persons: [
          action.payload,
            ...state.persons.slice(0, action.id)
          ]
        }
    case ADD_PERSON_FAILURE:
      return {
          ...state,
          errorMessage: action.payload.message,
          errorMessageValidateData: action.payload.data
        }
    default:
      return state;
  }
}
