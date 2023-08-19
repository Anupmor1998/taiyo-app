import axios from 'axios';

export const getCases = async () => {
  const res = await axios.get('https://disease.sh/v3/covid-19/all');
  return res.data;
};
