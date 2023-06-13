import "./style.css";
import { products } from "../../data/products";

function Products() {
    return (
        <div className="Products container margin-push">
            <h3>
                Aqui você encontrará uma variedade de produtos de alta qualidade para atender às suas necessidades no setor agropecuário.
            </h3>

            <div className="products-list">
                {products.map(product => {
                    return (
                        <div className="product" key={product.title}>
                            <img src={product.image} alt={product.title} />
                            <div>
                                <span>{product.title}</span>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;
