import { useQuery } from '@tanstack/react-query';  // React Query v5 import
import { areaListEndPoint } from '../constants/constant';

const fetchAreas = async () => {
  const response = await fetch(areaListEndPoint);
  const data = await response.json();
  return data?.meals || [];
};

export const useFetchAreas = () => {
  const { data: areas, isLoading, error } = useQuery({
    queryKey: ['areas'],  
    queryFn: fetchAreas,
    staleTime: Infinity,  
    refetchOnWindowFocus: false,  
  });

  return {
    areas,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
