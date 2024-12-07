import { useQuery } from '@tanstack/react-query';
import { searchByEndPoint } from '../constants/constant';

export const fetchMealsByArea = async (area) => {
  const response = await fetch(`${searchByEndPoint}${area}`);
  if (!response.ok) throw new Error('Failed to fetch meals');
  return response.json();
};


export const useFetchMeals = (area ) => {
  
  return useQuery({
    queryKey: ['meals', area],
    queryFn: () => fetchMealsByArea(area),
    staleTime: Infinity, 
    refetchOnWindowFocus: false,  
  });
};
