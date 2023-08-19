import { useQuery } from '@tanstack/react-query';
import { getMapData } from './fetchers';

export const useMap = () => {
  return useQuery(['map'], getMapData);
};
