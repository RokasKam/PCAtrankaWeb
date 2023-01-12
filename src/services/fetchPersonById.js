import axios from "axios";
export const fetchPersonById = async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
    return res.data;
  } catch (er) {
    console.log(er);
    alert('Something went wrong');
  }
}

