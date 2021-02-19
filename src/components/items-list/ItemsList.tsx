import React from 'react';
import { ReduxProps } from '.';

interface Props extends ReduxProps {}

const ItemsList: React.FC<Props> = ({list}) => {
  return (
    <ul>
      {
        list.map(element => 
          <li key={element.id} style={{ marginBottom: "1rem" }}>
            {element.id} - {element.title}: ${element.price}
          </li>
        )
      }
    </ul>
  )
}

export default ItemsList;