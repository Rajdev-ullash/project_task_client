import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const { log } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = log;
    useEffect(() => {
        fetch('https://protected-thicket-95007.herokuapp.com/orderDetails?email=' + loggedIn.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])


    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        const product = orders[i];
        total = (total + product.product?.price * 1);
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <table className="table mt-3">
                    {
                        orders.length > 0 &&
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Order Time</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                    }
                    <tbody>

                        {orders.length > 0 ?
                            orders.map((order) => (
                                <tr>
                                    <td>{order.product?.name}</td>
                                    <td>{order.product?.weight}</td>
                                    <td>1</td>
                                    <td>$ {order.product?.price}</td>
                                    <td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )) : <p className="text-center">You have no order</p>


                        }
                        {orders.length > 0 ?
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                {/* <td></td>
                            <td></td> */}
                                <td>$ {formatNumber(total)}</td>
                            </tr>
                            : null
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;