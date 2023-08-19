import axios from 'axios';

export const getCases = async () => {
  const res = await axios.get(
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
  );
  return res.data;
};
export const getMapData = async () => {
  const res = await axios.get('https://disease.sh/v3/covid-19/countries');
  return res.data;
};
