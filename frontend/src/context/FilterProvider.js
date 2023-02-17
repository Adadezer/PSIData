import React, { useMemo, useState } from 'react';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bankCode, setBankCode] = useState('');

  const filterValues = useMemo(() => ({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    bankCode,
    setBankCode,
  }), [
    startDate,
    endDate,
    bankCode,
  ]);

  return (
    <FilterContext.Provider value={filterValues}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
