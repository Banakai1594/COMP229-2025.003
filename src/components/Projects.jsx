import ListComponent from "./ListCompnent";

const data = [
  { title: "Project 1", text: "This is the first item",  imagePath: "" },
  { title: "Project 2", text: "This is the second item", imagePath: "" },
  { title: "Project 3", text: "This is the third item",  imagePath: "" },
];
        
    


function Projects() {
    return (
        <div>
            <h1>Projects Page</h1>
            <ListComponent items={data} />
        </div>
    );
}

export default Projects;