import { useQuery } from '@tanstack/react-query';
import { fetchMealsByArea } from '../api/mealApi';

export const useFetchMeals = (area) => {
  return useQuery({
    queryKey: ['meals', area],
    queryFn: () => fetchMealsByArea(area),
    staleTime: Infinity, 
    refetchOnWindowFocus: false,  
  });
};
