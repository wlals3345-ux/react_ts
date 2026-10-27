import { useState } from 'react';
import DrinkList from './DrinkList';

const Drink = () =>{
    
    const [drinks, setDrinks] = useState<string[]>([]);
    const [inputValue, setinputValue] = useState<string>("");
    
    // 입력값(음료) 변경 핸들러
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value)
    }
    // 음료 추가 함수 - 버튼을 클릭할 때 설명이 
    const addDrink = () => {
        setDrinks([...drinks, inputValue]);
    }
    return (
        <div>
            <h2>음료 리스트</h2>
             <input 
                type= "text"
                value={inputValue}
                onChange={handleTextChange}
                placeholder="글자를 입력해주세요"
                />
            <button onClick={addDrink}>음료추가</button>
            {/* <p>음료: {inputValue}</p> */}
            {/* <p>음료 리스트:{drinks}</p> */}
            <DrinkList
                drinks={drinks} />
            {/* <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                    ))}
            </ul> */}
        </div>
    )
}
export default Drink;