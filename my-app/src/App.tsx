
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
// import Drink from './components/Drink';
// import Posts from './posts/Posts';
// import PostDetail from './posts/PostDetail';
// import AddPost from './posts/AddPost';
// // import Box from './props/Box';
// import Card from './props/Card';
// import Memo from './stroage/Memo';
// import Todos from './stroage/Todos';
// import DrinkList from './components/DrinkList';
// import Greet from './components/Greet'
// import Greet2 from './components/Greet2'
// import InputValue from './components/inputValue';
// import Bank from "./reducer/Bank";
import ProductList from './products/ProductsList';
import Header from './layouts/Header';
import Cart from './products/Cart';
import CartProvider from './context/CartProvider';


function App() {
 

    

  return (
    <>
      <section className='app'>
        {/* CartProvider로 감싸면 내부의 컴포넌트는 children이 됨*/}
        <CartProvider>
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path= '/' element={<ProductList />}  />
            <Route path= '/cart' element={<Cart />} />
          </Routes>
          </BrowserRouter>
        </CartProvider>
        <div>
      





          {/* <Todos /> */}
          {/* <Memo /> */}
          {/* <Card title = "공지사항">
          <p>"내일은 typescript 시험이 있습니다"</p>
        </Card >
        <Card title="오늘의 할 일">
          <ul>
            <li>Props 타입 복습</li>
            <li>children 예제 실습</li>
          </ul>
          </Card> */}
          {/* <InputValue /> */}
          {/* <Drink /> */}
          {/* <Box>
            <h3>박스 안의 내용</h3>
            <p>이것은 박스 안의 내용입니다.</p>
          </Box>
          <Box>
            <h3>또 다른 박스 안의 내용</h3>
            <p>이것은 다른 박스 안의 내용입니다.</p>
          </Box> */}
      
         

          
          {/* <Greet  name="도경수" /> */}
          {/* <Greet2 name="이광수"
                  age= {30}
                  doClick= {doClick} */}
          
          
          
        </div>
        
      </section>
    </>
  )
}

export default App;
