import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

import './Sidebar.css'
const Sidebar = () => {
    // const { serviceOption } = useContext(UserContext);
    // const [serviceFakeData, setServiceFakeData] = serviceOption;

    const { log } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = log;

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://protected-thicket-95007.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedIn.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div>
            <div className="sidebar">
                <Link className="active" to="/orderList">Order List</Link>
                {isAdmin &&
                    <div>
                        <Link to="/addProduct">Add Service</Link>
                        <Link to="/makeAdmin">Make Admin</Link>
                        {/* <Link to="/manageService">Manage Service</Link> */}
                        <Link to="/allOrderList">All OrderList</Link>
                    </div>
                 }
                <Link to="/home">Back To Home</Link>
            </div>

            {/* <div className="content">
                <h1>this is</h1>
            </div> */}
        </div>
    );
};

export default Sidebar;