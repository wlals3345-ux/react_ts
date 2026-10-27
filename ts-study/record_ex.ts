/* Record<keys, Type>는 객체 키와 값의 타입을 간편하게 
정의할 수 있게 도와주는 유틸리티 타입이다.*/

type Fruit = "apple" | "banana" | "peach"

const prices: Record<Fruit, number>= {
    apple: 3000,
    banana: 1000,
    peach: 4000


}
console.log(`사과의 가격: ${prices.apple}, 바나나의 가격: ${prices.banana}, 복숭아의 가격: ${prices.peach}`);

type StringMap = Record<string, string>

const translations: StringMap = {
    hello: "안녕하세요",
    goodbye: "안녕하가세요"
}

console.log(translations.hello);
console.log(translations.goodbye);