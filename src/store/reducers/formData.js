const formData = (state = {text: {}}, action) => {
  switch (action.type) {
    case 'SUBMIT_PERSONAL':
      return {
        text: action.text
      };
    case 'SUBMIT_ADDRESS':
      return {
        text: action.text
      };
    case 'SUBMIT_EDUCATION':
      return {
        text: action.text
      };
    case 'SUBMIT_EXPERIENCE':
      return {
        text: action.text
      };
    default:
      return state;
  }
};

export default formData;
