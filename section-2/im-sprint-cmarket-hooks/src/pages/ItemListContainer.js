import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, updateCartItems }) {
  const handleClick = (event, itemId) => {
    updateCartItems({itemId});
    // 함수를 App.js에서 선언하고 실행은 여기서 실행한다.
  }
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
