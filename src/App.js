import './App.css';
import Header from './component/Header';
import Daylist from './component/Daylist';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*모듈을 가져올 때는 from의 내용을 파일의 주소로 쓰지 않아도 되나보다.
package.json 파일에 "dependencies" 중 "react-router-dom" 이 있는지 확인해 본다. 설치가 되어있는지 확인할 수 있는 방법이 있었다!

<qeustion!!!!!!>
(1)
{} 변수 등을 써서 내용을 가져오는 것으로 알고 있다. 
그래서 모듈의 내용 중에서 몇가지만 가져와서 쓰기 위해 쓸 내용을 {}에 넣어 가져오는 것이 아닌가 한다. 맞나?
(2)
BrouwserRouter, Router, Switch가 무엇일까?
일단 기본적으로 인터넷에 검색을 해보니 routing이란 다른 주소에 다른 화면을 보여 주는 것이라고 한다.*/


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Daylist />
        <Day />
      </div>
    </BrowserRouter>
  );
}

export default App;
