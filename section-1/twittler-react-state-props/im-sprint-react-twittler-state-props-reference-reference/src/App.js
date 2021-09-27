import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Switch>
              <Route path="/mypage">
                <MyPage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Tweets />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
