import axios from 'axios';
const POSTS_PER_PAGE = 5;

export const fetchPersons = async (setPersons, setTotalPageNumber, pageNumber, filters, sorting) => {
  const configurationObject = {
    method: 'get',
    url: process.env.REACT_APP_API,
    params: {
      PageNumber: pageNumber,
      PageSize: POSTS_PER_PAGE,
      IdFilter: filters.id,
      NameFilter: filters.name,
      AgeFilter: filters.age,
      HeightFilter: filters.height,
      SortingField: sorting.field, 
      IsDescending: sorting.descending
    },
  };
  try {
    const response = await axios(configurationObject);
    setPersons(response.data);
    setTotalPageNumber(JSON.parse(response.headers['x-pagination']).TotalPages);
  } catch (er) {
      alert('Something went wrong');
  }
};