import Rowcomponent from "./Rowcomponent";

function ListComponent({items}) {
    return (
        <div>
            {items.map ((item, i) => (
                <Rowcomponent key={i} item={item} />
                ))}
        </div>
    );
}

export default ListComponent;