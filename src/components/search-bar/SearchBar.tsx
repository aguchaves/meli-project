import React, { useState } from 'react';
import { ReduxProps } from '.';
import { getItems } from '../../api';
import { useHistory } from "react-router-dom";
import css from './search-bar.module.scss';
import logo from '../../assets/Logo_ML@2x.png';
import searchIcon from '../../assets/ic_Search@2x.png';

interface Props extends ReduxProps {}

const SearchBar: React.FC<Props> = (props) => {
  let history = useHistory();

  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    getItems(value)
      .then(data => {
        props.saveList(data.results)
        history.push("/items");
      });
  }

  return (
    <div className={css.searchBar}>
      <div className={css.container}>
        <img className={css.logo} src={logo} alt="ML-logo"/>
        <input className={css.input} id="search" type="text" placeholder="Nunca dejes de buscar" value={value} onChange={handleChange}></input>
        <button className={css.button} onClick={handleClick}>
          <img src={searchIcon} alt="search"/>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;