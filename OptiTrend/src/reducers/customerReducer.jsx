
const initialState = {
  fullName: '',
  email: '',
  phone: '',
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER_DETAILS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
