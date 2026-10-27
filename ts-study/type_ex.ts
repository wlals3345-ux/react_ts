


// 유니온(Union) 타입 : 여러 타입 중 1개를 선택
type MemberRole = "user" | "admin" 

// 객체 정의
type User = {
    id: number,
    name: string,
    age?: number // 선택속성
    role: MemberRole // 필수속성
}

// 객체 생성
const user1: User = { id: 1, name: "우영우", role: "admin"}
const user2: User = { id: 777, name: "박지민", age: 27, role: "admin"}
const user3: User = { id: 222, name: "박진채", age: 66, role: "user"}
const user4: User = { id: 555, name: "윤정아", age: 66, role: "user"}

console.log(`회원1 - ID: ${user1.id}, 이름: ${user1.name}, 나이: ${user1.age}, 권한: ${user1.role}`);
console.log(`회원1 - ID: ${user2.id}, 이름: ${user2.name}, 나이: ${user2.age}, 권한: ${user2.role}`);
console.log(`회원1 - ID: ${user3.id}, 이름: ${user3.name}, 나이: ${user3.age}, 권한: ${user3.role}`);
console.log(`회원1 - ID: ${user4.id}, 이름: ${user4.name}, 나이: ${user4.age}, 권한: ${user4.role}`);
