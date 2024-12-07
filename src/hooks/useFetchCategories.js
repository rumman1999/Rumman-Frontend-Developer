import { useQuery } from '@tanstack/react-query'; 
import { categoryListEndPoint } from '../constants/constant'; 

const fetchCategories = async () => {
  const response = await fetch(categoryListEndPoint);
  const data = await response.json();
  return data?.categories || [];
};

export const useFetchCategories = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],  
    queryFn: fetchCategories,  
    staleTime: Infinity, 
    refetchOnWindowFocus: false,  
  });

  return {
    categories,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
