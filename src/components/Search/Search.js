import React, { useState } from 'react';
// react-select-async-paginate: it is an alternate for async function (uses " react-select" , a popular library for building customizable and accessible dropdown select inputs in React applications)
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    //  it renders a dropdown select input with asynchronous loading and pagination support, 
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}  // It determines the delay between the user typing and the actual API call made to fetch the options. In this case, the debounce timeout is set to 600 milliseconds, meaning that the API call will be triggered only if the user stops typing for 600 milliseconds.
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
