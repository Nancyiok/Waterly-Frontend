import { useSearchParams } from 'react-router';
import { useCallback, useMemo } from 'react';

export function useSearchParamsManager() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const setParams = useCallback((newParams: Record<string, string | number | null | undefined>) => {
    setSearchParams((prev) => {
      const nextParams = new URLSearchParams(prev);
      
      Object.entries(newParams).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          nextParams.delete(key); 
        } else {
          nextParams.set(key, String(value));
        }
      });
      
      return nextParams;
    });
  }, [setSearchParams]);


  const clearParams = useCallback(() => {
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  return { params, setParams, clearParams };
}
