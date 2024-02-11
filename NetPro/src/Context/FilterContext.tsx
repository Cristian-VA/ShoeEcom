import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type Filters = {
  currentSize: string | null;
  bestFor: string | null;
  currentSort: string | null;
}

interface FilterContextType {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    currentSize: null,
    bestFor: null,
    currentSort: null,
  });

  const value = { filters, setFilters };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};