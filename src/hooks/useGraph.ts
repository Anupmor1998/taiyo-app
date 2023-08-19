import { useQuery } from '@tanstack/react-query';
import { getCases } from './fetchers';

export const useGraph = () => {
  return useQuery(['profile'], getCases);
};
