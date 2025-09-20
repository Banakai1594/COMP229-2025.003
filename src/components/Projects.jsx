import ListComponent from "./ListCompnent";

const data = [
    {
        title: photo10,
        text: "Title 01",
        imagePath: "This is the first item"
    },
    {
        title: photo11,
        text: "Title 02",
        imagePath: "This is the second item"
    },
    {
        title: photo12,
        text: "Title 03",
        imagePath: "This is the third item"
    }
]
        
    


function Projects() {
    return (
        <div>
            <h1>Projects Page</h1>
            <ListComponent items={data} />
        </div>
    );
}

export default Projects;