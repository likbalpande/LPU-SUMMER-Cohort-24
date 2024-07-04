const ProductInfoCard = (props) => {
    const { data = {} } = props;
    return (
        <div className="products-info-card">
            <h3>{data.title}</h3>
            <div className="products-item-cards-container">
                {data.products.map((elem) => (
                    <div className="products-item-card">
                        <img src={elem.img} />
                        <h5>{elem.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInfoCard;
