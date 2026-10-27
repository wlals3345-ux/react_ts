
import './App.css'
import Drink from './components/Drink';
// import DrinkList from './components/DrinkList';
// import Greet from './components/Greet'
// import Greet2 from './components/Greet2'
import InputValue from './components/inputValue';

function App() {
  const doClick = () => {
      alert("ㅎㅇㅎㅇ")};
    

  return (
    <>
      <section className='app'>
        <div>
          <InputValue />
          <Drink />

          
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
