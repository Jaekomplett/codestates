import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  // 굳이 state 함수를 받아와서 새 함수를 만들지 않아도 props 전달이 가능함.
  const updateCartItems = (item) => {
    let ids = cartItems.map(el => el.itemId)
    let idx = ids.indexOf(item.itemId)
    if(idx > -1){
      cartItems[idx].quantity += 1;
      return setCartItems([...cartItems]);
    }
    else {
      item.quantity = 1;
      return setCartItems([...cartItems, item])
    }
  }

  return (
    <Router>
      <Nav cartItems={cartItems}/>
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} updateCartItems={updateCartItems} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart setCartItems={setCartItems} cartItems={cartItems} items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
