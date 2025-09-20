function Rowcomponent({item}) {
    
    return (
        <div>
            <img src={item.imagePath} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    );
}

export default Rowcomponent;