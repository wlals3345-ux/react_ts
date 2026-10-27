import { useState } from 'react';


const InputValue = () => {  
    const[text, settext]  = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        settext(event.target.value)
    }
    return (
        <div>
            {/* <h2>글자 입력</h2> */}
            {/* <input 
                type= "text"
                value={text}
                onChange={handleTextChange}
                placeholder="글자를 입력해주세요"
            /> */}
        </div>
    )
}
export default InputValue;