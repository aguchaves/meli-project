import React, { useEffect, useState } from 'react';
import { ReduxProps } from '.';
import { getItem } from '../../api';
import { ItemDetail as IItemDetail } from '../../redux/modules/items';
import css from './item-detail.module.scss';

interface Props extends ReduxProps {}

const ItemDetail: React.FC<Props> = (props) => {
  const [itemId, setItemId] = useState('');
  const [itemDetail, setItemDetail] = useState<IItemDetail>();

  const getIdFromURL = () => {
    setItemId(window.location.href.split('/').reverse()[0]);
  }
  
  useEffect(() => {
    getIdFromURL();
    if (itemId) {
      getItem(itemId)
      .then(data => {
        setItemDetail(data.item);
        });
    }
  }, [itemId]);

  
  if (!itemDetail) {
    return null
  }

  const formattedPrice = new Intl.NumberFormat("es-ES").format(itemDetail.price.amount);

  return (
    <div className={css.itemDetail}>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.description}>
            <img className={css.image}  src={itemDetail.picture} alt="Item picture"/>          
            <h2 className={css.title}>Descripción del producto</h2>
            <p className={css.text}>
              {itemDetail.description}
            </p>
          </div>
          <div className={css.info}>
            <div className={css.details}>
              <div className={css.condition}>
                {itemDetail.condition === 'new' ? 'Nuevo' : 'Usado'} - {itemDetail.sold_quantity} vendidos
              </div>
              <h2 className={css.title}>
                {itemDetail.title}
              </h2>
              <h1 className={css.price}>
                $ {formattedPrice} 
                <span className={css.decimals}>
                  {itemDetail.price.decimals < 10 && '0'}
                  {itemDetail.price.decimals}
                </span>
              </h1>
              <button className={css.button}>
                Comprar
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default ItemDetail;