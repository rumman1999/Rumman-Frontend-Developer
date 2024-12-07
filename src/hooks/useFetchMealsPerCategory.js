import { useQuery } from '@tanstack/react-query'; 
import { searchByCategory } from '../constants/constant';

const fetchMealsByCategory = async (category) => {
  const response = await fetch(`${searchByCategory}${category || "Beef"}`);
  const data = await response.json();
  return data?.meals || [];
};

export const useFetchMealsPerCategory = (category) => {
  const { data: meals, isLoading, error } = useQuery({
    queryKey: ['meals', category], 
    queryFn: () => fetchMealsByCategory(category),
    staleTime: Infinity,  
    refetchOnWindowFocus: false, 
  });

  return {
    meals,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
