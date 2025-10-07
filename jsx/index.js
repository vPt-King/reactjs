const root = ReactDOM.createRoot(document.getElementById("root"))
const courses = [
    {
        name: "HTML, CSS"
    },
    {
        name: "Responsive for Web"
    },
    {
        name: "Reactjs"
    }
]

const ul = <ul>
    {courses.map((course,index)=>(
        <li key={index}>{course.name}</li>
    ))}
</ul>

root.render(ul)