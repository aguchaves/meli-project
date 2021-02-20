import React, { useState, useEffect, useRef } from 'react';
import { ReduxProps } from '.';
import { getItems } from '../../api';
import debounce from 'lodash.debounce';
import './search-bar.scss';
import logo from '../../assets/Logo_ML@2x.png';
import searchIcon from '../../assets/ic_Search@2x.png';

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
    <div className="search-bar">
      <div className="search-bar__container">
        <img className="search-bar__logo" src={logo} alt="ML-logo"/>
        <input className="search-bar__input" id="search" type="text" placeholder="Nunca dejes de buscar" value={value} onChange={handleChange}></input>
        <button className="search-bar__button">
          <img src={searchIcon} alt="search"/>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;