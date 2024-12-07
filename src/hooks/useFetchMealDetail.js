import { useQuery } from '@tanstack/react-query';
import { searchById } from '../constants/constant';

const fetchMealDetails = async (mealId) => {
  const response = await fetch(
    `${searchById}${mealId}`
  );
  const data = await response.json();
  return data.meals[0];
};

export const useFetchMealDetail = (mealId) => {
  const { data: meal, isLoading, error } = useQuery({
    queryKey: ['meal', mealId], 
    queryFn: () => fetchMealDetails(mealId),  
    staleTime: Infinity, 
    refetchOnWindowFocus: false,  
  });

  return {
    meal,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
