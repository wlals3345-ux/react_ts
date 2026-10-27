// Props 타입(인라인)
// {name} : {name: string} -> 속성: 타입 정의(문자열=string, 숫자=number 등 ..)
const Greet = ({name}: {name: string}) => {

    return(
        <div>
            <h3>이름: {name}</h3>
        </div>
    )
}
export default Greet;