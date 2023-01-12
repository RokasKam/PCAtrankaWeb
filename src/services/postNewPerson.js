import axios from 'axios';

export const postNewPerson = async person => {
  const configurationObject = {
    method: 'post',
    url: process.env.REACT_APP_API,
    data: person,
  };
  try {
    await axios(configurationObject);
    alert("Person was added");
  } catch (er) {
    alert(er.response.data);
  }   
}