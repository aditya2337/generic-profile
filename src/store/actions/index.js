export const submitPersonal = (text) => {
  return {
    type: 'SUBMIT_PERSONAL',
    text
  };
};

export const submitAddress = (text) => {
  return {
    type: 'SUBMIT_ADDRESS',
    text
  };
};

export const submitEducation = (text) => {
  return {
    type: 'SUBMIT_EDUCATION',
    text
  };
};

export const submitExperience = (text) => {
  return {
    type: 'SUBMIT_EXPERIENCE',
    text
  };
};
