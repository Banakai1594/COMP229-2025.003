import ListComponent from "./ListComponent";

const data = [
     { imagePath: photo08, text: 'This is the first Service Offered' },
     { imagePath: photo09, text: 'This is the second Service Offered' },
];

function Services(){
    return(
        <>
            <h3>Services</h3>
            <ListComponent items={data} />
        </>
    );
}

export default Services;