import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const updateFilter = filterText => {
  return {
    type: 'filter/updateFilter',
    payload: filterText,
  };
};

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filter/updateFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
