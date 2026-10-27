
// Props 타입(인라인)
// {name} : {name: string} -> 속성: 타입 정의(문자열=string, 숫자=number 등 ..)
const DrinkList = ({drinks}: {drinks : string[]}) => {
    return (
        <div>
              <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}
export default DrinkList;