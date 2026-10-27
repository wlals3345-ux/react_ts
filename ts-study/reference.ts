
type Grade = 'A' | 'B' | 'C' | 'D'

// 과목 객체 정의
interface Course {
    courseId: number,
    courseName: string,
    grade: Grade // 학점 타입을 참조
}


// 학생 객체 정의
interface Student {
    id: number,
    name: string,
    subjects: Course[] //과목 객체 참조
}

let student1 : Student = {
    id: 1,
    name: "김진환",
    subjects: [
        {courseId: 101, courseName: "Math", grade: 'A' },
        {courseId: 202, courseName: "English", grade: 'B' },
    ]
}

student1.subjects.forEach(subject =>
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`));