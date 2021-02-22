import React, { useState } from 'react';
import { ReduxProps } from '.';
import css from './items-list.module.scss';
import shippingImg from '../../assets/ic_shipping@2x.png';
import { Link } from 'react-router-dom';
import { IItemsList } from '../../redux/modules/items';

interface Props extends ReduxProps {}

const ItemsList: React.FC<Props> = ({list}) => {

  const [itemClicked, setItemClicked] = useState({});

  const getFormattedPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES").format(price);
  }
  if (!list) {
    return null
  }
  return (
    <div className={css.itemsList}>
      <div className={css.container}>
        <ul className={css.breadcrums}>
          {
            list.categories.map(category =>
              <li key={category} className={css.item}>{category}</li>
            )
          }
        </ul>
        <ul className={css.list}>
          {
            list.items.map(item => 
              <Link key={item.id} className={css.link} to={"/items/" + item.id}>
                <li className={css.item}>
                  <img className={css.thumbnail} src={item.picture} alt="Item picture"/>
                  <div className={css.info}>
                    <div className={css.header}>
                      <div className={css.price}>
                        $ {getFormattedPrice(item.price.amount)}
                        {
                          item.free_shipping && <img src={shippingImg} alt="shipping"/>
                        }
                      </div>
                      <div className={css.location}>
                        {item.state}
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