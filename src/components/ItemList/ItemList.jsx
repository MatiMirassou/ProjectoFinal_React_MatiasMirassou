import Item from "../Item/Item";


const ItemList = ({ products }) => {
    return (
            <div className="flex-container row" style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                {products.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))}
            </div>
    );
};

export default ItemList