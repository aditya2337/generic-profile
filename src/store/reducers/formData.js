const formData = (state = [], action) => {
  let finalData = {};
  switch (action.type) {
    case 'SUBMIT_PERSONAL':
      finalData.personal = action.text;
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case 'SUBMIT_ADDRESS':
      finalData.address = action.text;
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case 'SUBMIT_EDUCATION':
      finalData.education = action.text;
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case 'SUBMIT_EXPERIENCE':
      finalData.experience = action.text;
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default formData;
