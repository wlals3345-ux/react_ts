"use strict";
let student1 = {
    id: 1,
    name: "김진환",
    subjects: [
        { courseId: 101, courseName: "Math", grade: 'A' },
        { courseId: 202, courseName: "English", grade: 'B' },
    ]
};
student1.subjects.forEach(subject => console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`));
