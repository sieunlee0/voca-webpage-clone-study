import React from 'react';
import './App.css';
import Header from './component/Header';
import Daylist from './component/Daylist';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import ChangePage from './component/ChangPage';

// 모듈을 가져올 때는 from의 내용을 파일의 주소로 쓰지 않아도 되나보다.
// package.json 파일에 "dependencies" 중 "react-router-dom" 이 있는지 확인해 본다. 설치가 되어있는지 확인할 수 있는 방법이 있었다!

/*Q&A
Q
{}안에 있는 것을 변수처럼 가져오는 것으로 알고 있다. 
그래서 모듈의 내용 중에서 몇가지만 가져와서 쓰기 위해 쓸 내용을 {}에 넣어 가져오는 것이 아닌가 한다. 맞나?

A
맞음. react-router-dom에는 brouserRouter, route, switch에 대한 기능이 담겨 있고 각 기능에는 기능에 따른 정보들이 담겨 있을 것임.
각 기능들이 컴포넌트로써 가져와지는 것으로 볼 수 있겠음 
*/


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/">
              <Daylist />
            </Route>
            <Route path="/day/:day">
              <Day />
            </Route>
            <Route path="/create_word">
              <CreateWord />
            </Route>
            <Route path="/create_day">
              <CreateDay />
            </Route>
            <Route>
              <ChangePage/>
            </Route>
            <Route>
              <EmptyPage />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*route에 대한 공부 내용
Q
BrouwserRouter, Router, Switch가 무엇일까?
일단 기본적으로 인터넷에 검색을 해보니 routing이란 다른 주소에 다른 화면을 보여 주는 것이라고 한다.

A
routing(라우팅)이란 주소에 따라 각기 다른 페이지와 그에 따른 내용을 보여주게 하는 것.


Switch 내부는 url을 따라 각각 다른 페이지를 보여주게 되고 외부는 모든 페이지에 공통으로 보여지게 된다.

Route의 path에 /만 넣어 놓으면 무조건 첫 페이지로 가게 된다.

exact는 정확하게 그 주소에 일치할 경우에 페이지가 보여지도록 해분다.
위의 '/day'에는 '/'가 포함 되어 있기 때문에 주소가 '/'로 끝나더라도 '/day'의 내용이 보여진다.
그래서 주소가 '/'로 끝나는 경우에는 그에 대한 내용만 보여지도록 exact를 써주는 것이다.*/