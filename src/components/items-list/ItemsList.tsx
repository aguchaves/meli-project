import React, { useState } from 'react';
import { ReduxProps } from '.';
import css from './items-list.module.scss';
import shippingImg from '../../assets/ic_shipping@2x.png';
import { Link } from 'react-router-dom';

interface Props extends ReduxProps {}

const ItemsList: React.FC<Props> = ({list}) => {

  console.log(list);
  const [itemClicked, setItemClicked] = useState({});
  
  return (
    <div className={css.itemsList}>
      <div className={css.container}>
        <ul className={css.list}>
          {
            list.map(item => 
              <Link key={item.id} className={css.link} to={"/items/" + item.id}>
                <li className={css.item}>
                  <img className={css.thumbnail} src={item.thumbnail} alt="Item picture"/>
                  <div className={css.info}>
                    <div className={css.header}>
                      <div className={css.price}>
                        ${item.price}
                        {
                          item.shipping.free_shipping && <img src={shippingImg} alt="shipping"/>
                        }
                      </div>
                      <div className={css.location}>
                        {item.address.state_name}
                      </div>
                    </div>
                    <h2 className={css.title}>
                      {item.title}
                    </h2>
                  </div>

                </li>
              </Link>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ItemsList;