import React, { useEffect, useState } from 'react';
import { ReduxProps } from '.';
import { getItem } from '../../api';
import css from './item-detail.module.scss';

interface Props extends ReduxProps {}

const ItemDetail: React.FC<Props> = (props) => {
  const [itemId, setItemId] = useState('');
  const [itemDetail, setItemDetail] = useState(Object);

  const getIdFromURL = () => {
    setItemId(window.location.href.split('/').reverse()[0]);
  }
  
  useEffect(() => {
    getIdFromURL();
    if (itemId) {
      getItem(itemId)
        .then(itemDetail => {
          setItemDetail(itemDetail);
          console.log(itemDetail);
        });
    }
  }, [itemId]);

  if (!itemDetail) {
    return null
  }

  const formattedPrice = new Intl.NumberFormat("es-ES").format(itemDetail.price);

  return (
    <div className={css.itemDetail}>
      <div className={css.container}>
        <div className={css.productContent}>
          <div className={css.description}>
            <img className={css.image}  src={itemDetail.pictures && itemDetail.pictures[0].secure_url} alt="Item picture"/>          
            <h2 className={css.title}>Descripción del producto</h2>
            <p className={css.text}>
              {itemDetail.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={css.productContentInfo}>
            <div className={css.details}>
              <div className={css.condition}>
                {itemDetail.condition === 'new' ? 'Nuevo' : 'Usado'} - {itemDetail.sold_quantity} vendidos
              </div>
              <h2 className={css.title}>
                {itemDetail.title}
              </h2>
              <h1 className={css.price}>
                ${formattedPrice}
              </h1>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default ItemDetail;