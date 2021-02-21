import React from 'react';
import { ReduxProps } from '.';
import './items-list.scss';
import shippingImg from '../../assets/ic_shipping@2x.png';

interface Props extends ReduxProps {}

const ItemsList: React.FC<Props> = ({list}) => {

  console.log(list);
  
  return (
    <div className="items-list">
      <div className="items-list__container">
        <ul className="items-list__list">
          {
            list.map(item => 
              <li key={item.id} className="items-list__item">
                <div className="item__thumbnail" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                </div>
                <div className="item__info">
                  <div className="item__info__header">
                    <div className="price">
                      ${item.price}
                      {
                        item.shipping.free_shipping && <img src={shippingImg} alt="shipping"/>
                      }
                    </div>
                    <div className="location">
                      {item.address.state_name}
                    </div>
                  </div>
                  <h2 className="item__info__title">
                    {item.title}
                  </h2>
                </div>

              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ItemsList;