import React, { useState, useEffect, useRef } from 'react';
import { ReduxProps } from '.';
import { getItems } from '../../api';
import debounce from 'lodash.debounce';

interface Props extends ReduxProps {}

const SearchBar: React.FC<Props> = (props) => {

  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const debounceSearch = useRef(
    debounce(query => {
      getItems(query)
        .then(data => {
          props.saveList(data.results)
        });
    }, 500)
  )

  useEffect(() => {
    if (value) {
      debounceSearch.current(value);
    }
  }, [value])

  return (
    <div>
      <p html-for="search">{value}</p>
      <input id="search" type="text" value={value} onChange={handleChange}></input>
      <h1>{value}</h1>
    </div>
  )
}

export default SearchBar;