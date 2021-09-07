import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SpecificProduct = () => {

    const { log } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = log;

    const handleSubmit = () => {
        const orderDetails = { ...loggedIn, status: 'Waiting', product: singleProducted, orderTime: new Date() }

        fetch('https://protected-thicket-95007.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    alert('Your product has been added successfully');
                }
            })
    }

    const [specificProduct, setSpecificProduct] = useState([]);
    console.log(specificProduct)

    const { _id } = useParams();
    console.log(_id);

    useEffect(() => {
        fetch('https://protected-thicket-95007.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setSpecificProduct(data))
    }, [])

    const singleProducted = specificProduct.find(product => product?._id === _id)
    console.log(singleProducted)

    return (
        <div className="container m-md-5">
            <div>
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr key={singleProducted?._id}>
                            <td>{singleProducted?.name}</td>
                            <td>1</td>
                            <td>$ {singleProducted?.price}</td>
                        </tr>
                        <tr key={singleProducted?._id}>
                            <td>Total</td>
                            <td></td>
                            <td>$ {singleProducted?.price}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/dashboard" onClick={handleSubmit} className="btn btn-success justify-content-center align-item-center d-flex ms-auto m-5 w-25">Check Out</Link>
            </div>
        </div>
    );
};

export default SpecificProduct;