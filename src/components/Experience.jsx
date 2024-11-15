import { useState } from "react"

function Experience() {
    const [education, setEducation] = useState({
        school: "School University",
        startYear: 2020,
        endYear: 2024,
        major: "Biology",
        gpa: "3.7"
    })
    return(
        <>
        <h2 className="title">Education</h2>
        <h4>Institution : {education.school} ({education.startYear} - {education.endYear}) </h4>
        <h4>Major : {education.major}</h4>
        <h4>GPA : {education.gpa}</h4>
        </>
    )
}

export default Experience
