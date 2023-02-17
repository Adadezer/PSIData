import { createContext } from 'react';

const FilterContext = createContext({
  startDate: null,
  setStartDate: () => {},
  endDate: null,
  setEndDate: () => {},
  bankCode: '',
  setBankCode: () => {},
});

export default FilterContext;
