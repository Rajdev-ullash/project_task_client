import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import AllProduct from '../AllProduct/AllProduct';

const Product = () => {

    const { productsData } = useContext(UserContext);
    const [products, setProducts] = productsData;
    // console.log(products);
    useEffect(() => {
        fetch('https://protected-thicket-95007.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                {
                    products.map(product => <AllProduct product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Product;